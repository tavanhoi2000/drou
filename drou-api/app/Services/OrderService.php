<?php

namespace App\Services;

use App\Models\Order;

class OrderService extends BaseService
{
    protected $model;

    public function __construct(Order $Order)
    {
        $this->model = $Order;
    }

    public function search($params)
    {
        $query = $this->model->query();
        $limit = $params['limit'] ?? 10;

        try {
            if ($params['keyword'] ?? false) {
                $query->where('name', 'like', '%' . $params['keyword'] . '%');
            }

            return $query->paginate($limit);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function create($data)
    {
        try {
            $order = $this->model->create($data);
            $order->products()->attach($data['products']);
            return $order;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function find($id)
    {
        try {
            $Order = $this->model->findOrFail($id);
            $Order->products;
            return $Order;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function update($id, $data)
    {
        try {
            $Order = $this->model->findOrFail($id);
            $Order->update($data);
            $Order->products()->sync($data['products']);
            return $Order;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function delete($id)
    {
        try {
            $Order = $this->model->findOrFail($id);
            $Order->delete();
            return $Order;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
