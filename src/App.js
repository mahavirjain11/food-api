import './App.css';
import React from "react"
import Recipe from "./components/Recipe"
import NutritionAnalysis from './components/NutritionAnalysis';
import {Link,Switch,Route} from "react-router-dom"

function App() {
 
  return(
    
    <div>

    <Link to="/recipe">Recipe</Link> 
    <Link to="/nutrition">Nutrition</Link>    
            
     
    <Switch>

       <Route path="/nutrition" >
          <NutritionAnalysis />
      </Route>

      <Route path="/recipe">
          <Recipe />
      </Route>

    </Switch>
  
  </div>
  )
 
}

export default App;
