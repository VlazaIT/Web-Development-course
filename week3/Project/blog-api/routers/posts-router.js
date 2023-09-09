const express = require('express');
const router = express.Router();

// Import controllers for posts
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/posts-controller');

// Define post routes
router.get('/api/posts', getPosts);
router.get('/api/posts/:id', getPostById);
router.post('/api/posts', createPost);
router.put('/api/posts/:id', updatePost);
router.delete('/api/posts/:id', deletePost);

module.exports = router;