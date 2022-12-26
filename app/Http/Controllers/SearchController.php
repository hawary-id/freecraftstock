<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Download;
use App\Models\Follower;
use App\Models\Like;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->type;
        $value = $request->value;
        $title = $type." ".$value;
        if ($type === 'author') {
            $author = User::where('username', $request->username)->first();
            $contents = Content::with('type', 'user', 'category')
                ->where([
                    ['user_id', $author->id],
                    ['name', 'LIKE', "%$value%"],
                ])->get();
            $content = Content::with('type', 'user', 'category')
            ->where('user_id', $author->id)
            ->orderBy('id', 'DESC')->get();
            $assets = count($content);
            $followers = count(Follower::where('user_id', $author->id)->get());
            $favorites = count(Like::with('content')->whereHas('content', function ($query) use ($author) {
                    $query->where('user_id', $author->id);
                })->get());
            $downloads = count(Download::with('content')->whereHas('content', function ($query) use ($author) {
                    $query->where('user_id', $author->id);
                })->get());
            return Inertia::render('Author', [
                'author'=>$author,
                'contents'=>$contents,
                'assets'=>$assets,
                'followers'=>$followers,
                'favorites'=>$favorites,
                'downloads'=>$downloads,
                'search' =>$value,
            ]);
        }
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
