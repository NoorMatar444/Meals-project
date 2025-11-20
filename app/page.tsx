
import Image from 'next/image';
import ListAllIngredientsApi from './API/ListAllIngredientsApi/ListAllIngredientsApi';
import { ingredientType } from './Types/ingredients.type';

export default async function Home() {
  const data = await ListAllIngredientsApi();
  console.log(data)
  return (
    <>
      <div className="container w-[50%] mx-auto ">
        {data.map((ingredient:ingredientType) => <div key={ingredient.idIngredient} className="cards my-6">
          <div className="name bg-gray-500 text-white text-center"><p>{ingredient.strIngredient}</p></div>
          <div className="image flex justify-center"><Image alt='image' src={ingredient.strThumb} width={500} height={500} /></div>

          <div className="description"><p>{ingredient.strDescription}</p></div>
        </div>)}
      </div>
    </>
  )
}
