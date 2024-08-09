const Recipe = require('../models/RecipeModel');

const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, userId } = req.body;
    const newRecipe = await Recipe.create({ title, description, ingredients, instructions, userId });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions } = req.body;
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    await recipe.update({ title, description, ingredients, instructions });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    await recipe.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRecipe, getAllRecipes, getRecipe, updateRecipe, deleteRecipe };
