const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Consider hashing passwords before storing
  created_at: Date,
  updated_at: Date
});

const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author_id: mongoose.Schema.Types.ObjectId,
  created_at: Date,
  updated_at: Date
});

const Post = mongoose.model('Post', postSchema);

const commentSchema = new mongoose.Schema({
  text: String,
  post_id: mongoose.Schema.Types.ObjectId,
  created_at: Date,
  updated_at: Date
});

const Comment = mongoose.model('Comment', commentSchema);

app.get('/api/users', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
});

app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please provide name, email, and password for the user" });
  }

  const newUser = new User({
    name,
    email,
    password, // Consider hashing the password before storing
    created_at: new Date(),
    updated_at: new Date()
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create the user" });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndRemove(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "The user with the specified ID does not exist" });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the user" });
  }
});

app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please provide name, email, and password for the user" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, password, updated_at: new Date() }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "The user with the specified ID does not exist" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to update the user" });
  }
});

  mongoose.connect('mongodb+srv://VladTest:VladTestPasssword@newproject.1fibpor.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(error => {
        console.log("Error connecting to MongoDB:", error);
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});