<?php

namespace App\Services;

use App\Models\Product;

class ProductService extends BaseService
{
    protected $model;

    public function __construct(Product $Product)
    {
        $this->model = $Product;
    }

    public function search($params)
    {
        $query = $this->model->query();
        $limit = $params['limit'] ?? 10;

        $query->with('categories');

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
            return $this->model->create($data);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function find($id)
    {
        try {
            $Product = $this->model->with('categories')->findOrFail($id);
            return $Product;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function update($id, $data)
    {
        try {
            $Product = $this->model->findOrFail($id);
            $Product->update($data);
            return $Product;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function delete($id)
    {
        try {
            $Product = $this->model->findOrFail($id);
            $Product->delete();
            return $Product;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
