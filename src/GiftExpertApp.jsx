import { useState } from "react"


export const GiftExpertApp = () => {
  
  const [categories, setCategories] = useState(['dragon ball z']);

  const onNewCategory = (value) =>{
    if(categories.indexOf(value) === -1)  setCategories([value,...categories]);
  }
  return (
    <>
        <h1>Listado de gifs</h1>
        <AddCategory onNewCategory={ (value) => onNewCategory(value) } />
        { categories.map( category => (
          <GifGrid category={category} key={category} />
        )) }
    </>
  )
}
