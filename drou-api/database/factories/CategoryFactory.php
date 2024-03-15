<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    //  $table->increments('id');
    //  $table->string('name');
    //  $table->string('slug')->unique();
    //  $table->longText('description');
    //  $table->string('image');
    //  $table->timestamps();
    // category của tôi gồm có các loại sau đây: iPhone, mini speaker, tablets, headphones, laptop, assesories
    public function definition(): array
    {
        return [
            'name' => $this->faker->randomElement(['iPhone', 'mini speaker', 'tablets', 'headphones', 'laptop', 'assesories']),
            'slug' => $this->faker->unique()->slug,
            'description' => $this->faker->text,
            'image' => $this->faker->imageUrl(),
        ];
    }
}
