import React from 'react'
import ListAllMealsCategoriesApi from '../API/ListAllMealsCategoriesApi/ListAllMealsCategoriesApi'
import Image from 'next/image';
import { categoryType } from '../Types/category.type';

export default async function Category() {
  const data=await ListAllMealsCategoriesApi();
  console.log(data)
  return (
    <div>
      <div className="container w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-7 ">
        {data.map((category:categoryType)=><div key={category.idCategory} className="cards my-7">
          <div className="name text-center font-bold">
            <p>{category.strCategory}</p>
            <h1>NOOR</h1>
          </div>
          <div className="image flex justify-center align-middle">
            <Image src={category.strCategoryThumb} alt='image' width={500} height={500}/>
          </div>
          <div className="description ">
            <p className='line-clamp-6'>{category.strCategoryDescription}</p>
          </div>
        </div>)}
      </div>
    </div>
  )
}
