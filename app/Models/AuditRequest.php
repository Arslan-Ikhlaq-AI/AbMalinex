<?php

namespace App\Models;

use Database\Factories\AuditRequestFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $full_name
 * @property string $email
 * @property string|null $phone
 * @property string|null $practice_name
 * @property string|null $specialty
 * @property string|null $message
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['full_name', 'email', 'phone', 'practice_name', 'specialty', 'message'])]
class AuditRequest extends Model
{
    /** @use HasFactory<AuditRequestFactory> */
    use HasFactory;
}
