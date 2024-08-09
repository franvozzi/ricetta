const User = require('./userModel');
const Recipe = require('./recipeModel');
const Category = require('./categoryModel');
const Ingredient = require('./ingredientModel');
const RecipeIngredient = require('./recipeIngredientModel');
const Comment = require('./commentModel');

// Relaciones entre User y Recipe
User.hasMany(Recipe);
Recipe.belongsTo(User);

// Relaciones entre Recipe y Category
Category.hasMany(Recipe);
Recipe.belongsTo(Category);

// Relaciones entre Recipe y Ingredient
Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });
Ingredient.belongsToMany(Recipe, { through: RecipeIngredient });

// Relaciones entre User y Comment
User.hasMany(Comment);
Comment.belongsTo(User);

// Relaciones entre Recipe y Comment
Recipe.hasMany(Comment);
Comment.belongsTo(Recipe);

module.exports = {
  User,
  Recipe,
  Category,
  Ingredient,
  RecipeIngredient,
  Comment,
};