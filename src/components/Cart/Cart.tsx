import React from 'react';
import { Card, Grid} from 'semantic-ui-react';
import {ICartItem} from '../../App';



interface IMovie{
  id:number,
  name:string,
  description:number,
  imageUrl:string,
  price: number
}
interface ICartProps{
  message: ICartItem[];
} 

function deleteCart(){
  
}


export default function Cart(props:ICartProps) {

  console.log(props);
  

  let totalPrice = props.message.reduce((a, c)=> a + ((c.amount) * c.product.price) , 0)

  let movieHtml = props.message.map((movie:ICartItem)=>{
    return(
      <Grid.Column key= {movie.product.id}>
          <Card className="cardHeight">
              <Card.Content>
                <Card.Header>{movie.product.name}</Card.Header>                  
                <Card.Description>
                      <img className="image" src={movie.product.imageUrl} alt="Movie image"/>
                      <p>Price: {movie.product.price}</p>
                      {/* <button type='button' onClick={()=>clickHandel(movie)}>Add to Cart</button> */}
                </Card.Description>
              </Card.Content>
          </Card>
    <div>Number of product: {movie.amount}</div>
          <button type='button' onClick={deleteCart}>Delete</button>
          
      </Grid.Column>
      
  )})

 
  return (
    <>
        
        {/* <p>{JSON.stringify(props.message)}</p> */}
        <Grid columns={3}>
            {movieHtml}            
        </Grid>
        <p>Total Price: {totalPrice} </p>
    </>

    
  );
}
