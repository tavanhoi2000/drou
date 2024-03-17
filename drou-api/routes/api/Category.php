<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::group(['prefix' => 'category'], function () {
    Route::get('/', [CategoryController::class, 'search']);
    Route::get('/{id}', [CategoryController::class, 'show']); // Hiển thị thông tin một category cụ thể
    Route::post('/', [CategoryController::class, 'store']); // Tạo mới một category
    Route::put('/{id}', [CategoryController::class, 'update']); // Cập nhật thông tin một category
    Route::delete('/{id}', [CategoryController::class, 'destroy']); // Xóa một category
});
