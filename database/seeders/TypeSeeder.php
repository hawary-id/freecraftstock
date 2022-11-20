<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            [
                'name'=>'Vectors',
                'slug'=>'vectors',
                'thumbnail'=>'https://picsum.photos/150/150?random=1'
            ],
            [
                'name'=>'Photos',
                'slug'=>'photos',
                'thumbnail'=>'https://picsum.photos/150/150?random=2'
            ],
            [
                'name'=>'PSD',
                'slug'=>'psd',
                'thumbnail'=>'https://picsum.photos/150/150?random=3'
            ],
            [
                'name'=>'PNG',
                'slug'=>'png',
                'thumbnail'=>'https://picsum.photos/150/150?random=4'
            ],
            [
                'name'=>'Tutorials',
                'slug'=>'tutorials',
                'thumbnail'=>'https://picsum.photos/150/150?random=5'
            ]
        ];
        Type::insert($types);
    }
}
