//authorization part

//if someone is logged in token is present in localstorage get token and show cart page else cart page will not show
//here need to show user cart item-> user cart item is different for every user -.> to get that user cart item
//we get token because user islogged in localStorage token is present check that token is belongs to which user and shower cart items in cart page

// The Authorization header is used to pass the token value
// Request header → Authorization
// Value format →  “Bearer <token>”
// Given that token helps the backend understand who is requesting for the data, we can avoid passing a user identifier (eg: id),  if we need to get data for the same user as the token is created for.

//how forms store your once visited data
//when form is submitting some data is stored ,it's how form is implemented ex-> when user filling the form every 30s api calls happen 

//liting state up
//403 forbidden
//useState,useEffect