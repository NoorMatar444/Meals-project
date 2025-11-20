"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import DisplayMultiMeals from '../DisplayMultiMeals/DisplayMultiMeals'
import { searchMealByFirstType } from '../Types/searchMealByFirstType.type'


export default function SearchMealByFirstLetter() {
    const [meals,setMeals]=useState([])
    const {register,handleSubmit}=useForm({
        defaultValues:{
            char:""
        }
    })
    function handleLetterSearch(value:searchMealByFirstType){
        console.log(value);
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value.char}`)
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
        <form onSubmit={handleSubmit(handleLetterSearch)} className="flex flex-col sm:flex-row justify-center items-center">
            <input {...register("char")} className='w-1/2 h-10 rounded-2xl border-2' type="search" placeholder='Enter first letter of Meal Name'></input>
            <Button type="submit" className='mx-3 my-4'>Search</Button>
        </form>
        <DisplayMultiMeals  meals={meals}/>
      </div>

    </>
  )
}