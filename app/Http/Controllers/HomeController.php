<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $types = Type::all();
        $contents = Content::with('type', 'user')->take(10)->get();
        return Inertia::render('Home', [
            'types'=>$types,
            'contents'=>$contents,
        ]);
    }
}
