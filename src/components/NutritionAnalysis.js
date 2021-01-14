import React, { useState, useEffect } from 'react'
import axios from "axios"

function NutritionAnalysis() {

const APP_NUTRITION_KEY = "20616b4d194f4b5c3793af8ca3ca04ea"
const APP_NUTRITION_ID ="b032e13f"

const [title,setTitle] = useState(" ")
const [yieldText,setYieldText] = useState(" ")

const updateTitle = (event) => {
    setTitle(event.target.value)
}

const updateYield = (event) => {
    setYieldText(event.target.value)
}

const payload = {
    title,
    yield: yieldText,
    ingr: [
    "12 garlics",
    "25 Tomatoes"
    ]
}    


const submitHandler = (event) => {
    event.preventDefault()
    axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${APP_NUTRITION_ID}&app_key=${APP_NUTRITION_KEY}`,
    payload)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}    

    return (
        <div>
            <form onSubmit={submitHandler}> 
               <div> 
                   <label> Title </label>
                   <input type="text" 
                   name="title" 
                   value={title} 
                   onChange={updateTitle} /> 
                   </div>
               <div> 
               <label> servings </label>
                   <input type="text"
                    name="yieldText" 
                    value={yieldText}
                    onChange={updateYield}/> 
                    </div>
               <div>   
                   <button type="submit"> submit </button> 
                </div>
            </form>
        </div>
    )
}
export default NutritionAnalysis
