import React from 'react'

function RecipeDisplay({key,title,calories,image,ingredients }) {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <img src={image} alt="" />
            <h3> {calories} </h3>
            <ul>
                {ingredients && ingredients.map(ingredient => (
                    <li>{key}{ingredient.text}</li>
                ))}
            </ul>
            

        </div>
    )
}

export default RecipeDisplay
