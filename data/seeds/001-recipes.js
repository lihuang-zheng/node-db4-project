exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      recipeName: "Peanut Butter and Jelly Sandwich",
      recipeDescription:
        "A delicious and filling sandwich that everyone will enjoy."
    }
  ]);
};
