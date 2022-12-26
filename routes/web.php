<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\User\UserController;
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

Route::get('/', [HomeController::class,'index'])->name('home');
Route::get('/author/{username}', [AuthorController::class,'index'])->name('author');
Route::get('/type/{slug}/{sort}', [TypeController::class,'index'])->name('type');
Route::get('/detail/{typeSlug}/{slug}/{code}', [DetailController::class,'index'])->name('detail');
Route::get('/category/{slug}/{sort}', [CategoryController::class,'index'])->name('category');
Route::get('/search/', [SearchController::class,'index'])->name('search');

Route::prefix('user')->middleware(['auth', 'verified'])->name('user.')->group(function () {
   Route::get('/profile', [UserController::class,'index'])->name('home');
   Route::get('/collect/{id}', [UserController::class,'collect'])->name('collect');
   Route::get('/uncollect/{id}', [UserController::class,'uncollect'])->name('uncollect');
   Route::get('/like/{id}', [UserController::class,'like'])->name('like');
   Route::get('/unlike/{id}', [UserController::class,'unlike'])->name('unlike');
   Route::get('/follow/{id}', [UserController::class,'follow'])->name('follow');
   Route::get('/unfollow/{id}', [UserController::class,'unfollow'])->name('unfollow');
   Route::get('/download', [UserController::class,'download'])->name('download');
   Route::post('/profile/update/{id}', [UserController::class,'update'])->name('update');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/', function () {
        return Inertia::render('Prototype/Home');
    })->name('home');
    route::get('/vectors/popular', function () {
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
