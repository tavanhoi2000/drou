<?php

use App\Http\Controllers\CartController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'cart'], function () {
    Route::post('/add-to-cart', [CartController::class, 'addToCart']);
});
