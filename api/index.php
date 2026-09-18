<?php

/**
 * Serverless entry point for Vercel (vercel-php runtime).
 *
 * Every request that reaches this function is either a real file inside
 * public/ (images, icons, built assets) or a Laravel route. Files are served
 * directly so they work regardless of Vercel's static output.
 *
 * Vercel functions have a read-only filesystem except for /tmp, so caches,
 * compiled views and logs are redirected before Laravel boots. Any value
 * already defined in the Vercel project environment takes precedence.
 */
$publicPath = realpath(__DIR__.'/../public');
$requestPath = rawurldecode((string) parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH));
$requestedFile = realpath($publicPath.$requestPath);

if (
    $requestedFile !== false
    && is_file($requestedFile)
    && str_starts_with($requestedFile, $publicPath.DIRECTORY_SEPARATOR)
    && ! str_ends_with($requestedFile, '.php')
    && ! str_starts_with(basename($requestedFile), '.')
) {
    $mimeTypes = [
        'css' => 'text/css',
        'js' => 'text/javascript',
        'json' => 'application/json',
        'svg' => 'image/svg+xml',
        'png' => 'image/png',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'webp' => 'image/webp',
        'ico' => 'image/x-icon',
        'woff' => 'font/woff',
        'woff2' => 'font/woff2',
        'txt' => 'text/plain; charset=UTF-8',
    ];
    $extension = strtolower(pathinfo($requestedFile, PATHINFO_EXTENSION));
    $isFingerprintedAsset = str_starts_with($requestPath, '/build/');

    header('Content-Type: '.($mimeTypes[$extension] ?? (mime_content_type($requestedFile) ?: 'application/octet-stream')));
    header('Content-Length: '.filesize($requestedFile));
    header('Cache-Control: '.($isFingerprintedAsset ? 'public, max-age=31536000, immutable' : 'public, max-age=86400, s-maxage=604800'));
    readfile($requestedFile);

    return;
}

$setEnvironmentValue = function (string $key, string $value): void {
    putenv("{$key}={$value}");
    $_ENV[$key] = $value;
    $_SERVER[$key] = $value;
};

$serverlessDefaults = [
    'APP_ENV' => 'production',
    'APP_DEBUG' => 'false',
];

foreach ($serverlessDefaults as $key => $value) {
    if (getenv($key) === false && ! isset($_SERVER[$key])) {
        $setEnvironmentValue($key, $value);
    }
}

/*
 * These always win over the project environment: the function filesystem is
 * read-only, so file logs and framework cache files must live in /tmp.
 */
$serverlessOverrides = [
    'APP_CONFIG_CACHE' => '/tmp/config.php',
    'APP_EVENTS_CACHE' => '/tmp/events.php',
    'APP_PACKAGES_CACHE' => '/tmp/packages.php',
    'APP_ROUTES_CACHE' => '/tmp/routes.php',
    'APP_SERVICES_CACHE' => '/tmp/services.php',
    'VIEW_COMPILED_PATH' => '/tmp/views',
    'LOG_CHANNEL' => 'stderr',
];

/*
 * A SQLite file cannot persist between invocations, so database-backed
 * sessions, cache and queues are swapped for stateless drivers unless a
 * real database server is configured.
 */
$databaseConnection = getenv('DB_CONNECTION') ?: ($_SERVER['DB_CONNECTION'] ?? 'sqlite');

if ($databaseConnection === 'sqlite') {
    $serverlessOverrides += [
        'SESSION_DRIVER' => 'cookie',
        'CACHE_STORE' => 'array',
        'QUEUE_CONNECTION' => 'sync',
    ];
}

foreach ($serverlessOverrides as $key => $value) {
    $setEnvironmentValue($key, $value);
}

if (! is_dir('/tmp/views')) {
    mkdir('/tmp/views', 0755, true);
}

require __DIR__.'/../public/index.php';
