"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import DisplayMultiMeals from '../DisplayMultiMeals/DisplayMultiMeals'
import { filterByMainIngredientType } from '../Types/filterByMainIngredient.type'


export default function FilterByMainIngredient() {
    const [meals,setMeals]=useState([])
    const {register,handleSubmit}=useForm({
        defaultValues:{
            name:""
        }
    })
    function handleIngredientSearch(value:filterByMainIngredientType){
        console.log(value);
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value.name}`)
        .then((res)=>{
            console.log(res.data.meals);
            setMeals(res.data.meals)
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
      <div className="container w-[80%] mx-auto my-20">
        <form onSubmit={handleSubmit(handleIngredientSearch)} className="flex flex-col sm:flex-row justify-center items-center">
            <input {...register("name")} className='w-1/2 h-10 rounded-2xl border-2' type="search" placeholder='Enter Ingredient'></input>
            <Button type="submit" className='mx-3 my-4'>Search</Button>
        </form>
        <DisplayMultiMeals  meals={meals}/>
      </div>
    </>
  )
}