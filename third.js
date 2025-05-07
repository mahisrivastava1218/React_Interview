//API Contract & Mock data
//API Contract contains
//Api endpoint //request format //response format

//to mock api data for development.
// -can create mock apis using tools like postman 
//or use static data

//mocking with static data
import apiData from './data.json';
export default function VideoSearcher(props){
    const videos = apiData;
    console.log(videos);
    return <div>Hello World</div>;
}
//Typography
// the theme provides a set of types sizes that work well together,and also with the layout grid
{/* <Grid container margin="1rem" spacing={2} padding="1rem">
{filterProducts.length ? (
  filterProducts.map((product)=>(
   <Grid item xs={6} md={3} key={product.id}>
   <ProductCard
     productProp={product}
     handleAddToCart={()=>addToCart(token,items,products,product.id,1,{preventDuplicate : true})}
     />
     </Grid>
  ))
):(
  <Box></Box>
)} */}