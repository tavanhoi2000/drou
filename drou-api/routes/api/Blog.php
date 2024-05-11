<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::group(['prefix' => 'blog'], function () {
    Route::get('/', [BlogController::class, 'search']);
    Route::get('/{id}', [BlogController::class, 'show']); // Hiển thị thông tin một Blog cụ thể
    Route::post('/', [BlogController::class, 'store']); // Tạo mới một Blog
    Route::put('/{id}', [BlogController::class, 'update']); // Cập nhật thông tin một Blog
    Route::delete('/{id}', [BlogController::class, 'destroy']); // Xóa một Blog
});
