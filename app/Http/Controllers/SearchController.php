<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->type;
        $value = $request->value;
        $title = $type." ".$value;
        if ($type != "All") {
             $contents = Content::with('user', 'type')->whereHas('type', function ($query) use ($type) {
                $query->where('slug', $type);
             })
             ->where(function ($query) use ($value) {
                $query->where('name', 'LIKE', "%$value%")
                ->orWhere('description', 'LIKE', "%$value%");
             })->get();
             return Inertia::render('SearchResult', [
                'contents'=>$contents,
                'title'=>$title,
            ]);
        } else {
            $contents = Content::with('user', 'type')
            ->orWhere('name', 'LIKE', "%$value%")
            ->orWhere('description', 'LIKE', "%$value%")->get();
            return Inertia::render('SearchResult', [
            'contents'=>$contents,
            'title'=>$title,
        ]);
        }
        
    }
}
