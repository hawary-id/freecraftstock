<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Download;
use App\Models\Follower;
use App\Models\Like;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $followers = Follower::where('user_id', $author->id)->count();
        $favorites = Like::with('content')->whereHas('content', function ($query) use ($author) {
                $query->where('user_id', $author->id);
            })->count();
        $downloads = Download::with('content')->whereHas('content', function ($query) use ($author) {
                $query->where('user_id', $author->id);
            })->count();
            if(Auth::user()) {
                $follow = Follower::where([
                    ['user_id',$author->id],
                    ['follower_id',auth()->user()->id],
                ])->count();
                return Inertia::render('Author', [
                    'author'=>$author,
                    'contents'=>$contents,
                    'assets'=>$assets,
                    'followers'=>$followers,
                    'favorites'=>$favorites,
                    'downloads'=>$downloads,
                    'follow' => $follow
                ]);
            }
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
