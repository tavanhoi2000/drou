<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'authenticate'])->name('auth.authenticate')->middleware('guest');
    Route::post('/register', [AuthController::class, 'register'])->name('auth.register')->middleware('guest');
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'user'])->name('auth.user')->middleware('auth');
});
