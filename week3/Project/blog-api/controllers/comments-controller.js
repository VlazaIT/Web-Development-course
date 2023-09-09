// Import any necessary modules and data models

// Import any necessary modules and data models

// Controller for [POST] /api/posts/:id/comments
exports.createComment = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
  
    // Find the post with the specified ID
    const post = posts.find(p => p.id === id);
  
    // If the post is not found, respond with a 404 status code and a message
    if (!post) {
      return res.status(404).json({ message: "The post with the specified ID does not exist" });
    }
  
    // Check if the text property is present in the request body
    if (!text) {
      return res.status(400).json({ message: "Please provide text for the comment" });
    }
  
    // Create a new comment object
    const newComment = {
      text,
      post_id: id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  
    // Add the new comment to the comments array
    comments.push(newComment);
  
    // Respond with the newly created comment and HTTP status 201 (Created)
    res.status(201).json(newComment);
  };
  
  // Controller for [GET] /api/comments/:id
  exports.getCommentById = (req, res) => {
    const { id } = req.params;
  
    // Find the comment with the specified ID
    const comment = comments.find(c => c.id === id);
  
    // If the comment is not found, respond with a 404 status code and a message
    if (!comment) {
      return res.status(404).json({ message: "The comment with the specified ID does not exist" });
    }
  
    // Respond with the comment object
    res.json(comment);
  };
  
  // Controller for [PUT] /api/comments/:id
  exports.updateComment = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
  
    // Find the index of the comment with the specified ID
    const index = comments.findIndex(c => c.id === id);
  
    // If the comment is not found, respond with a 404 status code and a message
    if (index === -1) {
      return res.status(404).json({ message: "The comment with the specified ID does not exist" });
    }
  
    // Check if text property is present in the request body
    if (!text) {
      return res.status(400).json({ message: "Please provide text for the comment" });
    }
  
    // Update the comment's text and updated_at
    comments[index].text = text;
    comments[index].updated_at = new Date();
  
    // Respond with the updated comment
    res.json(comments[index]);
  };
  
  // Controller for [DELETE] /api/comments/:id
  exports.deleteComment = (req, res) => {
    const { id } = req.params;
  
    // Find the index of the comment with the specified ID
    const index = comments.findIndex(c => c.id === id);
  
    // If the comment is not found, respond with a 404 status code and a message
    if (index === -1) {
      return res.status(404).json({ message: "The comment with the specified ID does not exist" });
    }
  
    // Remove the comment from the array and store the deleted comment
    const deletedComment = comments.splice(index, 1)[0];
  
    // Respond with the deleted comment
    res.json(deletedComment);
  };