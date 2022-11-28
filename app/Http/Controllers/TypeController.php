<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TypeController extends Controller
{
    public function index($slug)
    {
        $title = Type::where('slug', $slug)->pluck('name');
        $contents = Content::with('type', 'user')->whereHas('type', function ($query) use ($slug) {
            $query->where('slug', $slug);
        })->get();
        return Inertia::render('Type', [
            'contents'=>$contents,
            'title'=>$title,
        ]);
    }
}
