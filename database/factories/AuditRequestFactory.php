<?php

namespace Database\Factories;

use App\Models\AuditRequest;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<AuditRequest>
 */
class AuditRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'full_name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => fake()->numerify('(###) ###-####'),
            'practice_name' => fake()->company().' Clinic',
            'specialty' => fake()->randomElement(['Cardiology', 'Dermatology', 'Mental Health', 'Orthopedics']),
            'message' => fake()->paragraph(),
        ];
    }
}
