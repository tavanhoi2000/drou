<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            // bảng này chứa thông tin của sản phẩm của môt ứng dụng bán đồ điển từ như điẹn thoai, laptop, phụ kiện, ...
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->longText('description');
            $table->integer('price');
            $table->integer('quantity');
            $table->string('image');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->unsignedInteger('category_id'); // thể loại của sản phẩm (điện thoại, laptop, phụ kiện, ...
            $table->foreign('category_id')->references('id')->on('categories');
            $table->timestamps();
        });
        // ví dụ request json tạo mới một sản phẩm
        // {
        //     "name": "Iphone 12",
        //     "slug": "iphone-12",
        //     "description": "Điện thoại iphone 12",
        //     "price": 10000000,
        //     "quantity": 100,
        //     "image": "iphone-12.jpg",
        //     "status": "active",
        //     "category_id": 1
        // }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
