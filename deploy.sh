#!/bin/bash
# Production deploy for cPanel shared hosting. Run from the repository root
# (cPanel's .cpanel.yml calls it on "Deploy HEAD Commit", or run `bash deploy.sh`).
# Frontend assets are built locally (`npm run build`) and committed in public/build.
set -euo pipefail
cd "$(dirname "$0")"
APP_DIR="$(pwd)"

echo "=== Deploy started $(date) in $APP_DIR"

command -v selectorctl >/dev/null 2>&1 && selectorctl --set-user-current=8.3 >/dev/null 2>&1 || true

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

if [ -d "$HOME/public_html" ] && [ ! -L "$HOME/public_html" ]; then
    mv "$HOME/public_html" "$HOME/public_html.bak.$(date +%s)"
fi
[ -L "$HOME/public_html" ] || ln -s "$APP_DIR/public" "$HOME/public_html"

$PHP artisan up

echo "=== Deploy finished $(date)"
