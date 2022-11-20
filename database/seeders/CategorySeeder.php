<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name'=>'Backgrounds / Textures',
                'slug'=>'backgrounds-textures',
                'thumbnail'=>'https://picsum.photos/150/150?random=1'
            ],
            [
                'name'=>'Patterns',
                'slug'=>'patterns',
                'thumbnail'=>'https://picsum.photos/150/150?random=2'
            ],
            [
                'name'=>'Cartoons',
                'slug'=>'cartoons',
                'thumbnail'=>'https://picsum.photos/150/150?random=3'
            ],
            [
                'name'=>'Silhouettes',
                'slug'=>'silhouettes',
                'thumbnail'=>'https://picsum.photos/150/150?random=4'
            ],
            [
                'name'=>'Invitation',
                'slug'=>'invitation',
                'thumbnail'=>'https://picsum.photos/150/150?random=5'
            ]
        ];
        Category::insert($categories);
    }
}
