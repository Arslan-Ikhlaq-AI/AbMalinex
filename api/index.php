<?php
require __DIR__ . '/../public/index.php';

/**
 * Serverless entry point for Vercel (vercel-php runtime).
 *
 * Vercel functions have a read-only filesystem except for /tmp, so caches,
 * compiled views and logs are redirected before Laravel boots. Any value
 * already defined in the Vercel project environment takes precedence.
 */
$serverlessDefaults = [
    'APP_ENV' => 'production',
    'APP_DEBUG' => 'false',
    'APP_CONFIG_CACHE' => '/tmp/config.php',
    'APP_EVENTS_CACHE' => '/tmp/events.php',
    'APP_PACKAGES_CACHE' => '/tmp/packages.php',
    'APP_ROUTES_CACHE' => '/tmp/routes.php',
    'APP_SERVICES_CACHE' => '/tmp/services.php',
    'VIEW_COMPILED_PATH' => '/tmp/views',
    'CACHE_STORE' => 'array',
    'SESSION_DRIVER' => 'cookie',
    'QUEUE_CONNECTION' => 'sync',
    'LOG_CHANNEL' => 'stderr',
];

foreach ($serverlessDefaults as $key => $value) {
    if (getenv($key) === false) {
        putenv("{$key}={$value}");
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

if (! is_dir('/tmp/views')) {
    mkdir('/tmp/views', 0755, true);
}

require __DIR__.'/../public/index.php';
