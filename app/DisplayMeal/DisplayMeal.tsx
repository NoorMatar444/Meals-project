import Image from 'next/image'
import { displayMealType } from '../Types/displayMeal.type'


export default function DisplayMeal({ meals }:{meals:displayMealType[]}) {
    return (
        <>
        {meals.map((meals)=>{
            return  <div key={meals.idMeal} className="card my-7">
                <div className="name text-center font-bold">
                    <p>{meals?.strMeal}</p>
                </div>
                <div className="category&Area flex justify-between">
                    <div className="category">
                        <p><span className='font-bold'>Category:</span> {meals?.strCategory}</p>
                    </div>
                    <div className="Area">
                        <p><span className='font-bold'>Area:</span> {meals?.strArea}</p>
                    </div>
                </div>
                
                    <div className="image flex justify-center my-7">
                        <Image src={meals?.strMealThumb} alt='image' width={500} height={500} />
                    </div>
                
                <div className="instructions">
                    <p>{meals?.strInstructions}</p>
                </div>
                {meals?.strYoutube && (
                    <div className="video flex justify-center my-7">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${meals?.strYoutube.split('v=')[1]}`}
                            title="Meal video tutorial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                )}
            </div>
        })}
        </>
    )
}
