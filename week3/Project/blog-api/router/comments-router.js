const express = require('express');
const router = express.Router();

// Import controllers for comments
const {
    createComment,
    getCommentById,
    updateComment,
    deleteComment,
  } = require('../controllers/comments-controller');
  
  // Define comment routes
  router.post('/api/posts/:id/comments', createComment);
  router.get('/api/comments/:id', getCommentById);
  router.put('/api/comments/:id', updateComment);
  router.delete('/api/comments/:id', deleteComment);

module.exports = router;