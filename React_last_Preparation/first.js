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


const [pageData, blogPostsData, reviewsData] = await Promise.all([
    axios.post("https://jsonplaceholder.typicode.com/posts"),
    axios.post("https://jsonplaceholder.typicode.com/users"),
    axios.post("https://jsonplaceholder.typicode.com/comments")
])