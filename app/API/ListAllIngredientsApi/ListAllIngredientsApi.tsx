"use server"

export default async function ListAllIngredientsApi() {

  const response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const {meals}=await response.json();
    return meals;
}
