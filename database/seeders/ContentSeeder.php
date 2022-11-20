<?php

namespace Database\Seeders;

use App\Models\Content;
use App\Models\Type;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = [
            [
                'code'=>Str::random(10),
                'name'=> 'free batik',
                'slug' => 'free-batik',
                'license' => 'Free',
                'keyword' => json_encode(['batik','vector','free','illustration']),
                'description' => 'Free download vector batik 2022',
                'file' => 'https://picsum.photos/500/300?random=1',
                'filename' => 'freebatik.webp',
                'user_id'=> User::all()->random()->id,
                'type_id'=> Type::all()->random()->id,
                'thumbnail' => 'https://picsum.photos/500/300?random=1',
            ],
            [
                'code'=>Str::random(10),
                'name'=> 'free illustration',
                'slug' => 'free-illustration',
                'license' => 'Free',
                'keyword' => json_encode(['batik','vector','free','illustration','2022']),
                'description' => 'Free download vector illustration 2022',
                'file' => 'https://picsum.photos/500/300?random=2',
                'filename' => 'freeillustration.webp',
                'user_id'=> User::all()->random()->id,
                'type_id'=> Type::all()->random()->id,
                'thumbnail' => 'https://picsum.photos/500/300?random=2',
            ],
            [
                'code'=>Str::random(10),
                'name'=> 'Border',
                'slug' => 'border',
                'license' => 'Free',
                'keyword' => json_encode(['batik','vector','free','illustration','2022','border']),
                'description' => 'Free download border illustration 2022',
                'file' => 'https://picsum.photos/500/300?random=3',
                'filename' => 'freeillustration.webp',
                'user_id'=> User::all()->random()->id,
                'type_id'=> Type::all()->random()->id,
                'thumbnail' => 'https://picsum.photos/500/300?random=3',
            ],
            [
                'code'=>Str::random(10),
                'name'=> 'Border',
                'slug' => 'border',
                'license' => 'Free',
                'keyword' => json_encode(['batik','vector','free','illustration','2022','border']),
                'description' => 'Free download border illustration 2022',
                'file' => 'https://picsum.photos/500/300?random=3',
                'filename' => 'freeillustration.webp',
                'user_id'=> User::all()->random()->id,
                'type_id'=> Type::all()->random()->id,
                'thumbnail' => 'https://picsum.photos/500/300?random=4',
            ],
            [
                'code'=>Str::random(10),
                'name'=> 'Border',
                'slug' => 'border',
                'license' => 'Free',
                'keyword' => json_encode(['batik','vector','free','illustration','2022','border']),
                'description' => 'Free download border illustration 2022',
                'file' => 'https://picsum.photos/500/300?random=3',
                'filename' => 'freeillustration.webp',
                'user_id'=> User::all()->random()->id,
                'type_id'=> Type::all()->random()->id,
                'thumbnail' => 'https://picsum.photos/500/300?random=5',
            ],
            [
                'code'=>Str::random(10),
                'name'=> 'Border',
                'slug' => 'border',
                'license' => 'Free',
                'keyword' => json_encode(['batik','vector','free','illustration','2022','border']),
                'description' => 'Free download border illustration 2022',
                'file' => 'https://picsum.photos/500/300?random=3',
                'filename' => 'freeillustration.webp',
                'user_id'=> User::all()->random()->id,
                'type_id'=> Type::all()->random()->id,
                'thumbnail' => 'https://picsum.photos/500/300?random=6',
            ]
        ];
        Content::insert($contents);
    }
}
