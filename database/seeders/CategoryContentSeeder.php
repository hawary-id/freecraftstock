<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\CategoryContent;
use App\Models\Content;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categoryContens = [
            [
                'content_id'=> Content::all()->random()->id,
                'category_id'=>Category::all()->random()->id,
            ],
            [
                'content_id'=>Content::all()->random()->id,
                'category_id'=>Category::all()->random()->id,
            ],
            [
                'content_id'=>Content::all()->random()->id,
                'category_id'=>Category::all()->random()->id,
            ],
            [
                'content_id'=>Content::all()->random()->id,
                'category_id'=>Category::all()->random()->id,
            ],
            [
                'content_id'=>Content::all()->random()->id,
                'category_id'=>Category::all()->random()->id,
            ],
            [
                'content_id'=>Content::all()->random()->id,
                'category_id'=>Category::all()->random()->id,
            ]
        ];
        CategoryContent::insert($categoryContens);
    }
}
