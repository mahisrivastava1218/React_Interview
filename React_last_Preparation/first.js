const axios=require('axios');

//API Contract & Mock data
//API Contract contains
//Api endpoint //request format //response format

//to mock api data for development.
// -can create mock apis using tools like postman 
//or use static data

//mocking with static data
// import apiData from './data.json';
// export default function VideoSearcher(props){
//     const videos = apiData;
//     console.log(videos); 
//     return <div>Hello World</div>;
// }
//Typography
// the theme provides a set of types sizes that work well together,and also with the layout grid


//this pattern could be very slow //ex->6sec
// const blogPostData = await axios.get(...)
// const userData = await axios.get(...)
// const commentsData = await axios.get(...)
//with Promise.all() you can run them in parallel without await ///ex->2sec
// const [pageData, blogPostsData, reviewsData] = await Promise.all([
//     axios.get(...),
//     axios.get(...),
//     axios.get(...)
// ])
//Promise.all(iterable);
// iterable: An iterable object(e,g;;,an array) containing Promises
//Parallel Execution: initiates all promises simultaneously, without waiting for each one to complete
// Single Promise: Returns a single promise that resolves when all input promises have resolved
//Order of Results: the result array maintains the order of input promises 
//Error Handling: if even a single promise rejects,Promise.all() immediately rejects with that reason

async function fetchData(){
try{

    const [pageData, blogPostsData, reviewsData] = await Promise.all([
        axios.post("https://jsonplaceholder.typicode.com/posts"),
        axios.post("https://jsonplaceholder.typicode.com/users"),
        axios.post("https://jsonplaceholder.typicode.com/comments")
    ])
    console.log(pageData.data, blogPostsData.data, reviewsData.data);

}catch(e){
        console.error(e);
}
}
fetchData();
// Axios is used because it simplifies and enhances the process of making HTTP requests in JavaScript, particularly in web development. 
// It provides a more user-friendly API than the native Fetch API, offering features like automatic JSON parsing, built-in error handling, 
// interceptors, and request cancellation. These features streamline development and make it easier to handle complex HTTP requests

// It’s great that Promise.all() gave us a boost in the performance.
// But, as we know, even if a single API call fails, the control would still go to catch block directly. E.g. suppose the posts data is fetched successfully, but the users data API endpoint has some issue. Now, in this case, we would like to at least show the posts as we have received that data. But, this is not possible with Promise.all().
// Is there a better approach?
// Promise.allSettled(iterable);
// iterable: An iterable object (e.g., an array) containing Promises.
// Exactly same syntax as Promises.all() (just mention allSettled instead of all,
// Settle Status: Each result will be an object with:
// status: Either 'fulfilled' or 'rejected'.
// value: The resolved value (if fulfilled).
// reason: The rejection reason (if rejected).
// Error Handling: Unlike Promise.all(), it does not short-circuit on a rejected promise; instead, it waits for all promises to settle.
// Use Cases: Useful when you want to know the outcome of multiple asynchronous operations, regardless of whether they succeed or fail.




// Material UI helps to create layouts and UI easily
// Material UI Grid helps to create a Grid layout easily for responsiveness

//every single letter triggering in particular API,it then cost server, it make a longterm impact in backend so debouncing concept is introduced=
// a small delay after every single character type so that API call only happening when the delay has passed. 

//Lifting State Up
//If multiple components needs access to the same changing data-> lift the shared state to their closest common ancestor

// debounceSearch(event, debounceTimeout) function to be called on the onChange() event of the search bar
// event → The onChange event object
// debounceTimeout → Reference to the debounce timer set