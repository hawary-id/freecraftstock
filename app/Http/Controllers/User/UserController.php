<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdateRequest;
use App\Models\Collection;
use App\Models\Follower;
use App\Models\Like;
use App\Models\User;
use Illuminate\Http\Request;
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
    }

    public function unlike($id)
    {
        Like::where([
            'content_id'=>$id,
            'user_id'=>auth()->user()->id
        ])->delete();
    }
    public function follow($id)
    {
        Follower::create([
            'user_id'=>$id,
            'follower_id'=>auth()->user()->id
        ]);
    }

    public function unfollow($id)
    {
        Follower::where([
            'user_id'=>$id,
            'follower_id'=>auth()->user()->id
        ])->delete();
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
}
