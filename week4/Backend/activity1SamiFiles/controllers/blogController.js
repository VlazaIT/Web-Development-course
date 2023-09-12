const Blog = require('../models/blogModel')
const mongoose = require('mongoose')

// create a new blog
const createBlog = async (req, res) => {
  const {title, body, author} = req.body
  console.log(title, body, author)
  const blog = await Blog.create({ title, body, author })
  res.status(200).json(blog)
}

// get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({createdAt: -1})
  res.status(200).json(blogs)
}

// get a single blog
const getBlog = async (req, res) => {
  const { id } = req.params
  console.log(id)
  const blog = await Blog.findById(id)
  res.status(200).json(blog)
}

// delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such blog'})
  }

  const blog = await Blog.findOneAndDelete({_id: id})

  if(!blog) {
    return res.status(400).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}

// Update blog using PATCH 
const patchBlog = async (req, res) => {
  const { id } = req.params
  const blog = await Blog.findOneAndUpdate({_id: id}, {...req.body }, { 
    new: true, // To return the updated document
})
  res.status(200).json(blog)
}

// Update blog using PUT 
const putBlog = async (req, res) => {
  // Your code here
}


module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  putBlog,
  patchBlog
}