<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;
    protected $fillable =[
        'code',
        'name',
        'slug',
        'license',
        'keyword',
        'description',
        'cover',
        'file',
        'filename',
        'like',
        'download',
        'comment',
        'user_id',
        'type_id',
        'thumbnail'
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id', 'id');
    }

    public function like()
    {
        return $this->hasMany(Like::class, 'content_id', 'id');
    }
    public function download()
    {
        return $this->hasMany(Download::class, 'content_id', 'id');
    }
    public function comment()
    {
        return $this->hasMany(Comment::class, 'content_id', 'id');
    }

    public function category()
    {
        return $this->belongsToMany(Category::class, 'category_contents');
    }

}
