
const apiUrl = 'http://localhost:3001/api/blogs/';



let id="650192bb87a474bee560c4c1"
const fetchBlog = async () => {
    const response = await fetch(`${apiUrl}/${id}`)
    console.log(`${apiUrl}/${id}`);
    const data = await response.json()

    console.log(data);
}

fetchBlog()

