<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/', function () {
        return Inertia::render('Prototype/Home');
    })->name('home');
    route::get('/vectors', function () {
        return Inertia::render('Prototype/Vectors');
    })->name('vectors');
    route::get('/photos', function () {
        return Inertia::render('Prototype/Photos');
    })->name('photos');
    route::get('/png', function () {
        return Inertia::render('Prototype/Png');
    })->name('png');
    route::get('/psd', function () {
        return Inertia::render('Prototype/Psd');
    })->name('psd');
    route::get('/tutorials', function () {
        return Inertia::render('Prototype/Tutorials');
    })->name('tutorials');
    route::get('/detail', function () {
        return Inertia::render('Prototype/Detail');
    })->name('detail');
    route::get('/author', function () {
        return Inertia::render('Prototype/Author');
    })->name('author');
    route::get('/category', function () {
        return Inertia::render('Prototype/Category');
    })->name('category');
    route::get('/about-us', function () {
        return Inertia::render('Prototype/AboutUs');
    })->name('about_us');
    route::get('/term-of-use', function () {
        return Inertia::render('Prototype/TermOfUse');
    })->name('term_of_use');
    route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');
    route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');
});

require __DIR__.'/auth.php';
