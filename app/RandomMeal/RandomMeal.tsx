"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import DisplayMeal from '../DisplayMeal/DisplayMeal';






export default function RandomMeal() {
  const [meals, setMeals] = useState([])
  async function randomMealApi() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    const { meals } = await response.json();
    setMeals(meals)
    console.log(meals)
  }

  return (
    <div>
      <div className="container w-[80%] mx-auto ">
        <div className="btn flex justify-center align-middle">
          <Button onClick={() => randomMealApi()}>Random Meal</Button>
        </div>
        <DisplayMeal meals={meals}/>
      </div>

    </div>
  )
}
