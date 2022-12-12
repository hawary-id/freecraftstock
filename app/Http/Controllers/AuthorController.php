<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Download;
use App\Models\Follower;
use App\Models\Like;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function index($username)
    {
        $author = User::where('username', $username)->first();
        $contents = Content::with('type', 'user', 'category')
            ->where('user_id', $author->id)
            ->orderBy('id', 'DESC')->get();
        $assets = count($contents);
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
        ]);
    }
}
