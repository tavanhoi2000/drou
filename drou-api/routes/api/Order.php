<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::group(['prefix' => 'order'], function () {
    Route::get('/', [OrderController::class, 'search']);
    Route::get('/{id}', [OrderController::class, 'show']); // Hiển thị thông tin một Order cụ thể
    Route::post('/', [OrderController::class, 'store']); // Tạo mới một Order
    Route::put('/{id}', [OrderController::class, 'update']); // Cập nhật thông tin một Order
    Route::delete('/{id}', [OrderController::class, 'destroy']); // Xóa một Order
});
