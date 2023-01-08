<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name'=> 'Freecraftstock',
            'username'=> 'Freecraftstock',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('user123'),
            'thumbnail' => 'https://picsum.photos/200/200',
        ]);
        $admin->assignRole('admin');
    }
}
