<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdateRequest;
use App\Http\Requests\User\UploadRequest;
use App\Models\Collection;
use App\Models\Content;
use App\Models\Download;
use App\Models\Follower;
use App\Models\Like;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Profile');
    }

    public function collect($id)
    {
        Collection::create([
            'content_id'=>$id,
            'user_id'=>auth()->user()->id
        ]);
    }

    public function uncollect($id)
    {
        Collection::where([
            'content_id'=>$id,
            'user_id'=>auth()->user()->id
        ])->delete();
    }
    public function like($id)
    {
        Like::create([
            'content_id'=>$id,
            'user_id'=>auth()->user()->id
        ]);
        $content = Content::findOrFail($id);
        $item = User::findOrFail($content->user_id);
        $likes = $item->likes + 1;
        $item->update([
            'likes'=>$likes]);
    }

    public function unlike($id)
    {
        Like::where([
            'content_id'=>$id,
            'user_id'=>auth()->user()->id
        ])->delete();
        $content = Content::findOrFail($id);
        $item = User::findOrFail($content->user_id);
        $likes = $item->likes - 1;
        $item->update([
            'likes'=>$likes]);
    }
    public function follow($id)
    {
        Follower::create([
            'user_id'=>$id,
            'follower_id'=>auth()->user()->id
        ]);
        $item = User::findOrFail($id);
        $followers = $item->followers + 1;
        $item->update([
            'followers'=>$followers]);
    }

    public function unfollow($id)
    {
        Follower::where([
            'user_id'=>$id,
            'follower_id'=>auth()->user()->id
        ])->delete();
        $item = User::findOrFail($id);
        $followers = $item->followers - 1;
        $item->update([
            'followers'=>$followers]);
    }

    public function update(UpdateRequest $request, $id)
    {
        $item = User::findOrFail($id);
        $item->update(['name'=>$request->name,'username'=>$request->username]);
        return redirect(route('user.home'))->with([
            'message' => 'Your profile successfully to update',
            'type' => 'success'
        ]);
    }

    public function upload(UploadRequest $request, $id)
    {
        $data = $request->all();
        $item = User::findOrFail($id);
        if (Storage::exists('/public/'.$item->thumbnail)) {
            Storage::delete('/public/'.$item->thumbnail);
        }
        $data['thumbnail']= Storage::disk('public')->put('user', $request->file('thumbnail'));
        $item->update($data);
        return redirect(route('user.home'))->with([
            'message' => 'Your profile successfully to update',
            'type' => 'success'
        ]);
    }

    public function download()
    {
        $user = Auth::user()->id;
         $contents = Content::with('user', 'type')->whereHas('download', function ($query) use ($user) {
            $query->where('user_id', $user);
        })->get();
        return Inertia::render('User/Download', [
            'contents'=>$contents,
        ]);
    }
    public function favorite()
    {
        $user = Auth::user()->id;
         $contents = Content::with('user', 'type')->whereHas('like', function ($query) use ($user) {
            $query->where('user_id', $user);
        })->orderBy('id', 'DESC')->get();
        return Inertia::render('User/Favorite', [
            'contents'=>$contents,
        ]);
    }
    public function collection()
    {
        $user = Auth::user()->id;
         $contents = Content::with('user', 'type')->whereHas('collection', function ($query) use ($user) {
            $query->where('user_id', $user);
        })->orderBy('id', 'DESC')->get();
        return Inertia::render('User/Collection', [
            'contents'=>$contents,
        ]);
    }
    public function following()
    {
        $user = Auth::user()->id;
         $followings = User::with('follower')->whereHas('follower', function ($query) use ($user) {
            $query->where('follower_id', $user);
        })->orderBy('id', 'DESC')->get();
        return Inertia::render('User/Following', [
            'followings'=>$followings,
        ]);
    }
}
