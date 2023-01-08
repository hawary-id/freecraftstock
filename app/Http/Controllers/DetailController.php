<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\Content;
use App\Models\Download;
use App\Models\Follower;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DetailController extends Controller
{
    public function index($typeSlug, $slug, $code)
    {
        $similars = Content::with('type', 'user')->where('slug', $slug)->where('code', '!=', $code)->get();
        $content = Content::with('type', 'user')->where('code', $code)->first();
        if(Auth::user()){
            $collect = Collection::where([
                ['content_id',$content->id],
                ['user_id',auth()->user()->id],
            ])->count();
            $like = Like::where([
                ['content_id',$content->id],
                ['user_id',auth()->user()->id],
            ])->count();
            $follow = Follower::where([
                ['user_id',$content->user_id],
                ['follower_id',auth()->user()->id],
            ])->count();
            return Inertia::render('Detail', [
            'similars'=> $similars,
            'content'=> $content,
            'collect'=>$collect,
            'like'=>$like,
            'follow'=>$follow,
        ]);
        }
        return Inertia::render('Detail', [
            'similars'=> $similars,
            'content'=> $content,
        ]);
    }
}
