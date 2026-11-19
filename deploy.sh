#!/bin/bash
# Production deploy for cPanel shared hosting. Run from the repository root
# (cPanel's .cpanel.yml calls it on "Deploy HEAD Commit", or run `bash deploy.sh`).
# Frontend assets are built locally (`npm run build`) and committed in public/build.
set -euo pipefail
cd "$(dirname "$0")"
APP_DIR="$(pwd)"

echo "=== Deploy started $(date) in $APP_DIR"

if command -v selectorctl >/dev/null 2>&1; then
    selectorctl --set-user-current=8.3 2>&1 || true
    echo "Web PHP (selector): $(selectorctl --user-current 2>&1 || true)"
else
    echo "selectorctl not found"
fi

PHP=/opt/alt/php83/usr/bin/php
[ -x "$PHP" ] || PHP=php
echo "PHP: $($PHP -r 'echo PHP_VERSION;')"

COMPOSER_PHAR="$HOME/bin/composer.phar"
if [ -f /opt/cpanel/composer/bin/composer ]; then
    COMPOSER="$PHP /opt/cpanel/composer/bin/composer"
elif command -v composer >/dev/null 2>&1; then
    COMPOSER=composer
else
    if [ ! -f "$COMPOSER_PHAR" ]; then
        mkdir -p "$HOME/bin"
        curl -sS -o "$COMPOSER_PHAR" https://getcomposer.org/download/latest-stable/composer.phar
    fi
    COMPOSER="$PHP $COMPOSER_PHAR"
fi

if [ ! -f .env ]; then
    echo "ERROR: .env is missing in $APP_DIR"
    exit 1
fi

[ -d vendor ] && $PHP artisan down --retry=15 || true

$COMPOSER install --no-dev --optimize-autoloader --no-interaction --no-progress

$PHP artisan migrate --force
$PHP artisan storage:link 2>/dev/null || true
$PHP artisan optimize:clear
$PHP artisan optimize

# The host's web server does not follow a symlinked document root, so public/
# is copied into ~/public_html with a front controller pointing back at the app.
WEB_ROOT="$HOME/public_html"
[ -L "$WEB_ROOT" ] && rm "$WEB_ROOT"
mkdir -p "$WEB_ROOT"
rm -rf "$WEB_ROOT/build"
cp -a public/. "$WEB_ROOT/"
# The web server defaults to an older PHP; force PHP 8.3 (CloudLinux alt-php + LiteSpeed).
{ echo 'AddHandler application/x-httpd-alt-php83___lsphp .php'; echo; cat public/.htaccess; } > "$WEB_ROOT/.htaccess"
cat > "$WEB_ROOT/index.php" <<PHP
<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

if (file_exists(\$maintenance = '$APP_DIR/storage/framework/maintenance.php')) {
    require \$maintenance;
}

require '$APP_DIR/vendor/autoload.php';

/** @var Application \$app */
\$app = require_once '$APP_DIR/bootstrap/app.php';

\$app->usePublicPath(__DIR__);

\$app->handleRequest(Request::capture());
PHP

$PHP artisan up

echo "=== Deploy finished $(date)"
