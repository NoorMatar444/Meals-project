import React from 'react'
import RandomMeal from '../RandomMeal/RandomMeal'
import SearchMealByName from '../SearchMealByName/SearchMealByName'
import SearchMealByFirstLetter from '../SearchMealByFirstLetter/SearchMealByFirstLetter'

export default function Search() {
  return (
    <div>
      <RandomMeal/>
      <SearchMealByName/>
      <SearchMealByFirstLetter/>
    </div>
  )
}
