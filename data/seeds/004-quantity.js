exports.seed = function(knex) {
  return knex("quantity").insert([
    {
      amountNumber: 2,
      amountUnit: "slices",
      ingredientsId: "1"
    },
    {
      amountNumber: 4,
      amountUnit: "tablespoons",
      ingredientsId: "2"
    },
    {
      amountNumber: 1,
      amountUnit: "tablespoon",
      ingredientsId: "3"
    }
  ]);
};
