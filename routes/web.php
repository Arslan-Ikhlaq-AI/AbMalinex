<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Marketing\AuditRequestController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'marketing/home')->name('home');
Route::inertia('services', 'marketing/services')->name('services');
Route::inertia('specialties', 'marketing/specialties')->name('specialties');
Route::inertia('about', 'marketing/about')->name('about');
Route::inertia('case-studies', 'marketing/case-studies')->name('case-studies');
Route::inertia('resources', 'marketing/resources')->name('resources');
Route::inertia('contact', 'marketing/contact')->name('contact');
Route::inertia('demo', 'marketing/demo')->name('demo');

Route::post('audit-requests', [AuditRequestController::class, 'store'])
    ->middleware('throttle:6,1')
    ->name('audit-requests.store');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::get('dashboard', DashboardController::class)->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::post('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
    Route::delete('invitations/{invitation}', [TeamInvitationController::class, 'decline'])->name('invitations.decline');
});

require __DIR__.'/settings.php';
