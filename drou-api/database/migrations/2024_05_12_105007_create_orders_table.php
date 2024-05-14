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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->jsonb('details')->nullable();
            $table->enum('status', ['pending', 'processing', 'completed', 'cancelled'])->default('pending');
            $table->timestamps();

            // {
            //     "name": "Iphone 12",
            //     "slug": "iphone-12",
            //     "description": "Điện thoại iphone 12",
            //     "price": 10000000,
            //     "quantity": 100,
            //     "images":  ["https://example.com/iphone-12.jpg", "https://example.com/iphone-12-1.jpg"]
            //     "status": "active",
            //     "category_id": 1
            // }

            // ví dụ request json tạo mới
            // {
            //     "name": "Nguyễn Văn A",
            //     "email": "use@gmail.com",
            //     "phone": "0123456789",
            //     "address": "123 Đường ABC",
            //     "details": {
            //         "payment_type": 1
            //     },
            //      "status": "pending",
            //    "products": [
            //         {
            //     "name": "Iphone 12",
            //     "slug": "iphone-122",
            //     "description": "Điện thoại iphone 12",
            //     "price": 10000000,
            //     "quantity": 100,
            //     "images": [
            //         "https://example.com/iphone-12.jpg",
            //         "https://example.com/iphone-12-1.jpg"
            //     ],
            //     "status": "active",
            //     "category_id": 1,
            //     "updated_at": "2024-05-12T11:24:22.000000Z",
            //     "created_at": "2024-05-12T11:24:22.000000Z",
            //     "id": 4
            //       },
            //       {
            //     "name": "Iphone 12",
            //     "slug": "iphone-122",
            //     "description": "Điện thoại iphone 12",
            //     "price": 10000000,
            //     "quantity": 100,
            //     "images": [
            //         "https://example.com/iphone-12.jpg",
            //         "https://example.com/iphone-12-1.jpg"
            //     ],
            //     "status": "active",
            //     "category_id": 1,
            //     "updated_at": "2024-05-12T11:24:22.000000Z",
            //     "created_at": "2024-05-12T11:24:22.000000Z",
            //     "id": 5
            // ]
            //
            // }

            // {
            //     "name": "Nguyễn Văn A",
            //     "email": "use@gmail.com",
            //     "phone": "0123456789",
            //     "address": "123 Đường ABC",
            //     "details": {
            //                      "payment_type": 1
            //                 },
            //      "status": "pending",
            //   "products": [{
            //    "product_id": 1,
            //    "quantity": 2,
            //    "total_price": 20000000
            //    }]
            // }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
