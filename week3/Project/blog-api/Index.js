const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Sample data for blog posts and comments
const posts = [];
const comments = [];

// Import the post router
//const postsRouter = require('./routers/posts-router');

// Use the post router as middleware
//app.use(postsRouter);

// Import the comment router
const commentsRouter = require('./router/comments-router');

// Use the comment router as middleware
app.use(commentsRouter);

app.get('/api/posts/:id', (req, res) => {
    const { id } = req.params;
  
    // Find the post with the specified ID
    const post = posts.find(p => p.id === id);
  
    // If the post is not found, respond with a 404 status code and a message
    if (!post) {
      return res.status(404).json({ message: "The post with the specified ID does not exist" });
    }
  
    // Respond with the post object
    res.json(post);
  });

  app.post('/api/posts', (req, res) => {
    const { title, contents } = req.body;
  
    // Check if title and contents properties are present in the request body
    if (!title || !contents) {
      return res.status(400).json({ message: "Please provide title and contents for the post" });
    }
  
    // Create a new post object
    const newPost = {
      id: Date.now().toString(),
      title,
      contents,
      created_at: new Date(),
      updated_at: new Date(),
    };
  
    // Add the new post to the posts array
    posts.push(newPost);
  
    // Respond with the newly created post and HTTP status 201 (Created)
    res.status(201).json(newPost);
  });

  app.put('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, contents } = req.body;
  
    // Find the index of the post with the specified ID
    const index = posts.findIndex(p => p.id === id);
  
    // If the post is not found, respond with a 404 status code and a message
    if (index === -1) {
      return res.status(404).json({ message: "The post with the specified ID does not exist" });
    }
  
    // Check if title and contents properties are present in the request body
    if (!title || !contents) {
      return res.status(400).json({ message: "Please provide title and contents for the post" });
    }
  
    // Update the post's title, contents, and updated_at
    posts[index].title = title;
    posts[index].contents = contents;
    posts[index].updated_at = new Date();
  
    // Respond with the updated post
    res.json(posts[index]);
  });

  app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the post with the specified ID
  const index = posts.findIndex(p => p.id === id);

  // If the post is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The post with the specified ID does not exist" });
  }

  // Remove the post from the array and store the deleted post
  const deletedPost = posts.splice(index, 1)[0];

  // Respond with the deleted post
  res.json(deletedPost);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});