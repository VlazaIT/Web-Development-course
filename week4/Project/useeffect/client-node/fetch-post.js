
const apiUrl = 'http://localhost:3001/api/blogs/';

const blog = { 
    title:"New file", 
    body:"New body", 
    author:"Not Sami" }

const addBlog = async () => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    })
const json = await response.json()
}

addBlog()

