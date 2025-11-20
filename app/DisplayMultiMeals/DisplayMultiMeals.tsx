import Image from "next/image";
import Link from "next/link";
import React from "react";
import { displayMealType } from "../Types/displayMeal.type";

type DisplayMultiMealsProps = {
  meals: displayMealType[];
};

export default function DisplayMultiMeals({ meals }: DisplayMultiMealsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="card p-3 shadow-md rounded-lg">
          <div className="image">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          <div className="name text-center font-bold mt-2">
            <p>{meal.strMeal}</p>
          </div>

          <Link
            href={`/Meal/${meal.idMeal}`}
            className="block mt-2 bg-blue-500 text-white text-center py-2 rounded-md"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

