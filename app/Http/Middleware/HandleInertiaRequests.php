<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Content;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */

    public function categoryList()
    {
        return Cache::remember("categoryList", 300, function () {
            return Category::all();
        });
    }
    public function recommendedSearch()
    {
        return Cache::remember("recommendedSearch", 300, function () {
            return Content::inRandomOrder()->limit(1)->pluck('keyword');
        });
    }
    public function TypeList()
    {
        return Cache::remember("typeList", 300, function () {
            return Type::all();
        });
    }

    public function recommended()
    {
        return Cache::remember('recommended', 300, function () {
            return Content::with(['type','user'])->inRandomOrder()->take(10)->get();
        });
    }
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'categoryList' => [
                'data' => $this->categoryList(),
            ],
            'recommendedSearch' => [
                'data' => $this->recommendedSearch(),
            ],
            'typeList' => [
                'data' => $this->TypeList(),
            ],
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type'),
            ],
            'recommended' => [
                'data' => $this->recommended()
            ]
        ]);
    }
}
