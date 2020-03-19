exports.seed = function(knex) {
  return knex("steps").insert([
    {
      stepNumber: 1,
      stepDirections: "Get 2 slices of bread.",
      recipesId: 1
    },
    {
      stepNumber: 2,
      stepDirections:
        "Place peanut butter on one side of one of the slices of bread.",
      recipesId: 1
    },
    {
      stepNumber: 3,
      stepDirections: "Place jelly on one side of the other slice of bread.",
      recipesId: 1
    },
    {
      stepNumber: 4,
      stepDirections:
        "Join the peanut butter side of one slice with the jelly side of the other slice.",
      recipesId: 1
    }
  ]);
};
