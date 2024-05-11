<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::group(['prefix' => 'product'], function () {
    Route::get('/', [ProductController::class, 'search']);
    Route::get('/{id}', [ProductController::class, 'show']); // Hiển thị thông tin một Product cụ thể
    Route::post('/', [ProductController::class, 'store']); // Tạo mới một Product
    Route::put('/{id}', [ProductController::class, 'update']); // Cập nhật thông tin một Product
    Route::delete('/{id}', [ProductController::class, 'destroy']); // Xóa một Product
});
