import { useState,useEffect } from "react"
import RecipeDisplay from './RecipeDisplay'

function Recipe() {
const APP_ID = "0f470fad"
const APP_KEY = "473c46570d7f02474f3c210f9e5bb697"
  
  const [recipes,setRecipes] = useState([]) // to store array of data from api 
  const [search,setSearch] = useState(" ")  
  const [query,setQuery]  = useState("peanut")

  useEffect(() =>{
    getRecipes() // function for fetching data
  },[query])

  const getRecipes = async () =>{  // fetching data from api
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json() // json formatting
    console.log(data)
    setRecipes(data.hits) // updates recipes[] with the fetched data 
  }
  const updateSearch = (event) => {
    setSearch(event.target.value)    // updates the search with userinput in the UI
  }

  const getSearch = (event) => { // onclicking the Search button 
    event.preventDefault()
    setQuery(search)
    setSearch(" ")
  }

  return (
    <div className="App" >

      <form className="search-form" onSubmit={getSearch}>
        <input 
        className="search-bar" 
        type="text" value={search} 
        onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
      {recipes.map(recipeList => (
        <RecipeDisplay 
        key={recipeList.recipe.calories}
        title={recipeList.recipe.label} 
        calories={recipeList.recipe.calories} 
        image={recipeList.recipe.image}
        ingredients={recipeList.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default Recipe
