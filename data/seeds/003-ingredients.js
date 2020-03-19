exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingredientName: "Bread" },
    { ingredientName: "Peanut Butter" },
    { ingredientName: "Jelly" }
  ]);
};
