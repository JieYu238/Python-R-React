import React from "react";
import IngredientList from "./ingredientList";
import ClaudeRecipe from "./claudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);
  console.log(recipeSection);
  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      // recipeSection.current.scrollIntoView();
      const yCoord =
        recipeSection.current.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [recipe]);
  async function getRecipe() {
    const recipeMarkDown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkDown);
  }
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((preIngredients) => [
      ...preIngredients,
      newIngredient[0].toUpperCase() + newIngredient.slice(1),
    ]);
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
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
