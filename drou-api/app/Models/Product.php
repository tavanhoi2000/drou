<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'quantity',
        'images',
        'status',
        'category_id'
    ];

    public function categories()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    protected $casts = [
        'images' => 'array'
    ];

}
