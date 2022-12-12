<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Content;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $contents = Cache::remember("homeContent", 300, function () {
            return Content::with(['type','user'])->orderBy('download', 'DESC')
            ->orderBy('like', 'DESC')->take(10)->get();
        });
        $categories = Cache::remember("homeCategory", 300, function () {
            return Category::inRandomOrder()->take(5)->get();
        });
        return Inertia::render('Home', [
            'contents'=>$contents,
            'categories'=>$categories,
        ]);
    }
}
