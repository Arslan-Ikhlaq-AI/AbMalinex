<?php

use App\Models\AuditRequest;

test('visitors can request a free billing audit', function () {
    $attributes = AuditRequest::factory()->make()->toArray();

    $this->post(route('audit-requests.store'), $attributes)
        ->assertRedirect(route('contact'))
        ->assertSessionHasNoErrors();

    $this->assertDatabaseHas('audit_requests', [
        'full_name' => $attributes['full_name'],
        'email' => $attributes['email'],
        'specialty' => $attributes['specialty'],
    ]);
});

test('audit request requires a name and a valid email', function () {
    $this->post(route('audit-requests.store'), [
        'full_name' => '',
        'email' => 'not-an-email',
    ])->assertSessionHasErrors(['full_name', 'email']);

    $this->assertDatabaseCount('audit_requests', 0);
});
