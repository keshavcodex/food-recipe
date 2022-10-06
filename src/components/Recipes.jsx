import React from "react";
import RecipeItem from "./RecipeItem";

function Recipes(props) {
  const { recipes } = props;
  return (
    // <div className="row">
    // <div className="card-body">
    <div className="row height: 5px">
      {recipes.map((recipe) => (
        <RecipeItem
          label={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

export default Recipes;
