<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function users(){
        $this->belongsTo(User::class);
    }

    public function likes(){
        $this->hasMany(Like::class);
    }

    public function comments(){
        $this->hasMany(Comment::class);
    }
}