<?php

namespace App\Services;

use App\Models\Category;

class CategoryService extends BaseService
{
    protected $model;

    public function __construct(Category $category)
    {
        $this->model = $category;
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
            return $this->model->create($data);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function find($id)
    {
        try {
            $category = $this->model->findOrFail($id);
            return $category;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function update($id, $data)
    {
        try {
            $category = $this->model->findOrFail($id);
            $category->update($data);
            return $category;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function delete($id)
    {
        try {
            $category = $this->model->findOrFail($id);
            $category->delete();
            return $category;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
