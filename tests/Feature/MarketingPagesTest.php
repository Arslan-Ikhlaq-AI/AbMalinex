<?php

use Inertia\Testing\AssertableInertia as Assert;

test('marketing pages render their components', function (string $routeName, string $component) {
    $this->get(route($routeName))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component($component));
})->with([
    'home' => ['home', 'marketing/home'],
    'services' => ['services', 'marketing/services'],
    'specialties' => ['specialties', 'marketing/specialties'],
    'about' => ['about', 'marketing/about'],
    'case studies' => ['case-studies', 'marketing/case-studies'],
    'resources' => ['resources', 'marketing/resources'],
    'contact' => ['contact', 'marketing/contact'],
    'demo' => ['demo', 'marketing/demo'],
]);
