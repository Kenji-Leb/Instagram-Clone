<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    public function users(){
        $this->belongsTo(User::class);
    }

    public function posts(){
        $this->belongsTo(Post::class);
    }
}