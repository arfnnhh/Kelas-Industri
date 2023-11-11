<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Services;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'title' => 'Standard',
                'price' => 10,
                'team' => [
                    ['title' => '2 Team members', 'active' => true],
                ],
                'cloud' => [
                    ['title' => 20, 'active' => true],
                ],
                'inthelp' => [
                    ['title' => 'Integration Help', 'active' => true],
                ],
                'sketch' => [
                    ['title' => 'Sketch Files', 'active' => false],
                ],
                'api' => [
                    ['title' => 'API Access', 'active' => false],
                ],
            ],
            [
                'title' => 'Professional',
                'price' => 20,
                'team' => [
                    ['title' => '4 Team members', 'active' => true],
                ],
                'cloud' => [
                    ['title' => 40, 'active' => true],
                ],
                'inthelp' => [
                    ['title' => 'Integration Help', 'active' => true],
                ],
                'sketch' => [
                    ['title' => 'Sketch Files', 'active' => true],
                ],
                'api' => [
                    ['title' => 'API Access', 'active' => false],
                ],
            ],
            [
                'title' => 'Enterprise',
                'price' => 40,
                'team' => [
                    ['title' => '10 Team members', 'active' => true],
                ],
                'cloud' => [
                    ['title' => 100, 'active' => true],
                ],
                'inthelp' => [
                    ['title' => 'Integration Help', 'active' => true],
                ],
                'sketch' => [
                    ['title' => 'Sketch Files', 'active' => true],
                ],
                'api' => [
                    ['title' => 'API Access', 'active' => true],
                ],
            ],
        ];

        foreach ($data as $entry) {
            $service = new Services([
                'title' => $entry['title'],
                'price' => $entry['price'],
            ]);

            $service->save();

            // Insert related data
            foreach ($entry as $key => $value) {
                if (is_array($value)) {
                    $service->{$key}()->createMany($value);
                }
            }
        }
    }
}

