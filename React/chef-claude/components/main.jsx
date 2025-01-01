import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);
  const IngredientsListItems = ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((preIngredients) => [...preIngredients, newIngredient]);
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
      <ul className="ingredientsListItems">{IngredientsListItems}</ul>
    </main>
  );
}
