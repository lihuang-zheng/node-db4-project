exports.seed = function(knex) {
  return knex("recipes-ingredients").insert([
    { recipesId: 1, ingredientsId: 1 },
    { recipesId: 1, ingredientsId: 2 },
    { recipesId: 1, ingredientsId: 3 }
  ]);
};
