<?php

namespace App\Http\Controllers;

use App\Services\OrderService;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function search(Request $request)
    {
        $params = $request->all();
        $orders = $this->orderService->search($params);

        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $order = $this->orderService->create($data);
        return response()->json($order);
    }

    public function show($id)
    {
        $order = $this->orderService->find($id);

        return response()->json($order);
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $order = $this->orderService->update($id, $data);

        return response()->json($order);
    }


    public function updateStatus(Request $request, $id)
    {
        $data = $request->status;
        $order = $this->orderService->updateStatus($id, $data);

        return response()->json($order);
    }
    
