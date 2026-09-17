<?php

namespace App\Http\Controllers\Marketing;

use App\Http\Controllers\Controller;
use App\Http\Requests\Marketing\StoreAuditRequestRequest;
use App\Models\AuditRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class AuditRequestController extends Controller
{
    /**
     * Store a free billing audit request submitted from the marketing site.
     */
    public function store(StoreAuditRequestRequest $request): RedirectResponse
    {
        AuditRequest::create($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Thanks! Our team will reach out within one business day.')]);

        return to_route('contact');
    }
}
