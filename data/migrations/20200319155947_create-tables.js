exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table.string("recipeName", 48).notNullable();
      table.string("recipeDescription", 128);
    })
    .createTable("steps", table => {
      table.increments();
      table.integer("stepNumber").notNullable();
      table.string("stepDirections", 128).notNullable();
      table
        .integer("recipesId")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", table => {
      table.increments();
      table
        .string("ingredientName", 48)
        .notNullable()
        .unique();
    })
    .createTable("quantity", table => {
      table.increments();
      table.integer("amountNumber").notNullable();
      table.string("amountUnit").notNullable();
      table
        .integer("ingredientsId")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipes-ingredients", table => {
      table
        .integer("recipesId")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("ingredientsId")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.primary(["recipesId", "ingredientsId"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes-ingredients")
    .dropTableIfExists("quantity")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
