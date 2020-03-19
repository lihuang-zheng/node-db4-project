const db = require("../data/db.config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .join(
      "recipes-ingredients",
      "recipes-ingredients.ingredientsId",
      "ingredients.id"
    )
    .join("quantity", "quantity.ingredientsId", "ingredients.id")
    .select("ingredientName", "quantity.amountNumber", "quantity.amountUnit")
    .where({ recipesId: recipe_id });
}

function getInstructions(recipe_id) {
  return db("steps").where({ recipesId: recipe_id });
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
