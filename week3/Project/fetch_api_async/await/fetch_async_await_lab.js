// fetch_async_await_lab.js

async function fetchData() {
    console.log("Fetching data...");

// First, we need to create an array to list all the URLs we want to fetch.
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
        "https://jsonplaceholder.typicode.com/posts/4",
        "https://jsonplaceholder.typicode.com/posts/5",
      ];
  
      try {
        // Fetch all URLs
        const responses = await Promise.all(urls.map(url => fetch(url)));
        
        // Map each response to the json() promise to get the actual data
        const data = await Promise.all(responses.map(async (response, index) => {
          if (!response.ok) {
            throw new Error(`HTTP error for URL ${urls[index]}! Status: ${response.status}`);
          }
          return response.json();
        }));
    
        // Log the data to the console
        data.forEach((postData, index) => {
          console.log(`Data from URL ${urls[index]}:`, postData);
        });
    
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    fetchData();