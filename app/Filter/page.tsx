import React from 'react'
import FilterByMainIngredient from '../FilterByMainIngredient/FilterByMainIngredient'
import FilterByCategory from '../FilterByCategory/FilterByCategory'
import FilterByArea from '../FilterByArea/FilterByArea'

export default function Filter() {
  return (
    <div>
      <FilterByMainIngredient/>
      <FilterByCategory/>
      <FilterByArea/>
    </div>
  )
}
