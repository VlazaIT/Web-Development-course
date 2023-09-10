// fetch_lab.js
console.log("Fetching data...");

// First, we need to create an array to list all the URLs we want to fetch.

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5",
];

// In order to fetch all of the URLs, we need to use Promise.all().
Promise.all(urls.map(url => fetch(url)))
  .then(responses => 
    // Map each response to the json() promise to get the actual data
    Promise.all(responses.map(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }))
  )
  .then(data => {
    // Log the data to the console
    data.forEach((postData, index) => {
      console.log(`Data from URL ${urls[index]}:`, postData);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });