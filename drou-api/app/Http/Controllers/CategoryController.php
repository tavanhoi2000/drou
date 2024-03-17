<?php

namespace App\Http\Controllers;

use App\Services\CategoryService;
use Illuminate\Http\Request;

/**
 * @OA\Get(
 *     path="/api/category",
 *     tags={"Category"},
 *     summary="Get all category",
 *     description="Get all category",
 *     operationId="index",
 *     @OA\Response(
 *         response=200,
 *         description="successful operation"
 *     )
 * )
 * @OA\Get(
 *     path="/api/category/{id}",
 *     tags={"Category"},
 *     summary="Get category by id",
 *     description="Get category by id",
 *     operationId="show",
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of category to return",
 *         required=true,
 *         @OA\Schema(
 *             type="integer",
 *             format="int64"
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="successful operation"
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="Category not found"
 *     )
 * )
 *  * @OA\Post(
 *     path="/api/category",
 *     tags={"Category"},
 *     summary="Create a new category",
 *     description="Create a new category",
 *     operationId="create",
 *     @OA\RequestBody(
 *         description="New category object",
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="application/json",
 *             @OA\Schema(
 *                 type="object",
 *                 @OA\Property(
 *                     property="name",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                     property="slug",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                     property="description",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                    property="image",
 *                   type="string"
 *                )
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=201,
 *         description="Category created"
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Invalid input"
 *     )
 * )
 * @OA\Put(
 *     path="/api/category/{id}",
 *     tags={"Category"},
 *     summary="Update an existing category",
 *     description="Update an existing category",
 *     operationId="update",
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of category to return",
 *         required=true,
 *         @OA\Schema(
 *             type="integer",
 *             format="int64"
 *         )
 *     ),
 *     @OA\RequestBody(
 *         description="Updated category object",
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="application/json",
 *             @OA\Schema(
 *                 type="object",
 *                 @OA\Property(
 *                     property="name",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                     property="slug",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                     property="description",
 *                     type="string"
 *                 ),
 *                 @OA\Property(
 *                    property="image",
 *                   type="string"
 *                )
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Category updated"
 *     ),
 *     @OA\Response(
 *         response=400,
 *         description="Invalid input"
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="Category not found"
 *     )
 * )
 * @OA\Delete(
 *     path="/api/category/{id}",
 *     tags={"Category"},
 *     summary="Deletes a category",
 *     description="Deletes a category",
 *     operationId="destroy",
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         description="ID of category to delete",
 *         required=true,
 *         @OA\Schema(
 *             type="integer",
 *             format="int64"
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Category deleted"
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="Category not found"
 *     )
 * )
 */


// viết Swagger api cho CategoryController

class CategoryController extends Controller
{
    public $categoryService;
    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    /**
     * get all category
     */

    public function search(Request $request)
    {
        try {
            return $this->categoryService->search($request->all());
        } catch (\Throwable $th) {
            return $th;
        }
    }

    /**
     * Display the information of a specific category.
     */
    public function show($id)
    {
        try {
            return $this->categoryService->find($id);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    /**
     * Create a new category.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
        ]);

        try {
            return $this->categoryService->create($validatedData);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    /**
     * Update the information of a category.
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string' . $id,
            'description' => 'nullable|string',
            'image' => 'nullable|string',
        ]);

        try {
            return $this->categoryService->update($id, $validatedData);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    /**
     * Delete a category.
     */
    public function destroy($id)
    {
        try {
            return $this->categoryService->delete($id);
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
