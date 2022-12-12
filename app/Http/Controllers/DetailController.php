<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailController extends Controller
{
    public function index($typeSlug, $slug, $code)
    {
        $similars = Content::with('type', 'user')->where('slug', $slug)->where('code', '!=', $code)->get();
        $content = Content::with('type', 'user')->where('code', $code)->get();
        return Inertia::render('Detail', [
            'similars'=> $similars,
            'content'=> $content
        ]);
    }
}
