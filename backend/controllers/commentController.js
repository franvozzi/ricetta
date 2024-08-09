const Comment = require('../models/CommentModel');

const createComment = async (req, res) => {
  try {
    const { content, userId, recipeId } = req.body;
    const newComment = await Comment.create({ content, userId, recipeId });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentsForRecipe = async (req, res) => {
  try {
    const comments = await Comment.findAll({ where: { recipeId: req.params.recipeId } });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    await comment.update({ content });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    await comment.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createComment, getCommentsForRecipe, getComment, updateComment, deleteComment };
