import Image from "next/image";
import React from "react";

export default async function Meal({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const data = await response.json();

    const meal = data.meals?.[0];
    if (!meal) return <div>No meal found</div>;

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-3">{meal.strMeal}</h1>

            <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={400}
                height={400}
                className="rounded-lg w-80"
            />

            <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
            <p className="mt-2 text-gray-700">{meal.strInstructions}</p>
        </div>
    );
}

