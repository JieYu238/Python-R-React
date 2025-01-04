import React from "react";
import IngredientList from "./ingredientList";
import ClaudeRecipe from "./claudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((preIngredients) => [
      ...preIngredients,
      newIngredient[0].toUpperCase() + newIngredient.slice(1),
    ]);
  }
  const [recipeShown, setRecipeShown] = React.useState(false);
  function toggleRecipeShown() {
    setRecipeShown((prevIsRecipeShown) => !prevIsRecipeShown);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
