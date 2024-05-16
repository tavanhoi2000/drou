<?php

namespace App\Http\Controllers;

use App\Services\CartService;
use Illuminate\Http\Request;

class CartController extends Controller
{
    
    public $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;
    }

    public function addToCart(Request $request)
    {
        return auth()->user();
        // $data = $request->products;
        // $cart = $this->cartService->addToCart($data);
        // return response()->json($cart);
    }

}
