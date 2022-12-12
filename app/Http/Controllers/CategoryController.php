<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Content;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index($slug, $sort)
    {
        $title = Category::select('name', 'slug')->where('slug', $slug)->get();
        if ($sort ==='recents') {
            $contents = Content::with('type', 'user', 'category')->whereHas('category', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->orderBy('id', 'DESC')->get();
        }elseif ($sort==='randoms') {
            $contents = Content::with('type', 'user', 'category')->whereHas('category', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->inRandomOrder()->get();
        }else {
            $contents = Content::with('type', 'user', 'category')->whereHas('category', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->orderBy('download', 'DESC')->get();
        }
        return Inertia::render('Category', [
            'contents'=>$contents,
            'title'=>$title,
            'sort'=>$sort
        ]);
    }
}
