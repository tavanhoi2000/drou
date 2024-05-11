<?php

namespace App\Services;

use App\Models\Blog;

class BlogService extends BaseService
{
    protected $model;

    public function __construct(Blog $Blog)
    {
        $this->model = $Blog;
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
            $Blog = $this->model->findOrFail($id);
            return $Blog;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function update($id, $data)
    {
        try {
            $Blog = $this->model->findOrFail($id);
            $Blog->update($data);
            return $Blog;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function delete($id)
    {
        try {
            $Blog = $this->model->findOrFail($id);
            $Blog->delete();
            return $Blog;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
