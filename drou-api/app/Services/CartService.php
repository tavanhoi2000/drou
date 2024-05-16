<?php

namespace App\Services;

use App\Models\Cart;

class CartService extends BaseService
{
    protected $model;

    public function __construct(Cart $Cart)
    {
        $this->model = $Cart;
    }

    public function addToCart($data)
    {
        $cart = $this->model->firstOrCreate([
            'user_id' => auth()->id()
        ]);

        return $cart;

    }
    

}
