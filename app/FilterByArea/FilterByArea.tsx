"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import DisplayMultiMeals from '../DisplayMultiMeals/DisplayMultiMeals';
import { Button } from '@/components/ui/button';
import { filterByAreaType } from '../Types/filterByArea.type';

export default function FilterByArea() {
    const [meals, setMeals] = useState([])
    const [isMealExist, setIsMealExist] = useState(true)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: ""
        }
    })
    function handleAreaSearch(value: filterByAreaType) {
        console.log(value);
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value.name}`)
            .then((res) => {

                if (res.data.meals) {
                    setMeals(res.data.meals)
                    setIsMealExist(true)
                } else {
                    setMeals([])
                    setIsMealExist(false)
                }

            }).catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            {isMealExist ? <div className="container w-[80%] mx-auto my-20">
                <form onSubmit={handleSubmit(handleAreaSearch)} className="flex flex-col sm:flex-row justify-center items-center">
                    <input {...register("name")} className='w-1/2 h-10 rounded-2xl border-2' autoComplete='off' type="search" placeholder='Enter Area'></input>
                    <Button type="submit" className='mx-3 my-4'>Search</Button>
                </form>
                <DisplayMultiMeals meals={meals} />
            </div> : <div className="container w-[80%] mx-auto my-20">
                <form onSubmit={handleSubmit(handleAreaSearch)} className="flex flex-col sm:flex-row justify-center items-center">
                    <input {...register("name")} className='w-1/2 h-10 rounded-2xl border-2' autoComplete='off' type="search" placeholder='Enter Area'></input>
                    <Button type="submit" className='mx-3 my-4'>Search</Button>
                </form>
                <h1 className='text-center text-2xl font-bold mt-10'>No Meal Found</h1>
            </div>}
        </>
    )
}
