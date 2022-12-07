import { removeRecipe } from './favoriteRecipesSlice.js';
import React from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";





export const FavoriteRecipes = (props) =>{
  
  const { favoriteRecipes, dispatch } = props;
  
  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };


  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

 
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  }
  
};
