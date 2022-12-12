<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class TypeController extends Controller
{
    public function index($slug, $sort)
    {
        
        $title = Type::select('name', 'slug')->where('slug', $slug)->get();
        if ($sort ==='recents') {
            $contents = Content::with('type', 'user')->whereHas('type', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->orderBy('id', 'DESC')->get();
        } elseif ($sort ==='randoms') {
            $contents = Content::with('type', 'user')->whereHas('type', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->inRandomOrder()->get();
        }else {
            $contents = Content::with('type', 'user')->whereHas('type', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->orderBy('download', 'DESC')->get();
        }
        return Inertia::render('Type', [
            'contents'=>$contents,
            'title'=>$title,
            'sort'=>$sort,
        ]);
    }
}
