import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Grid} from 'semantic-ui-react';
import '../Home/Home.css'

export interface IMovie{
    id:number,
    name:string,
    description:number,
    imageUrl:string,
    price: number
}
export default function Home() {
    const defaultValue:IMovie[]=[];
    const [movies, setMovies]=useState(defaultValue);
    const [cart, setCart] = useState(defaultValue);
    useEffect(()=>{
        axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
            .then(result=>{
                    setMovies(result.data);
            })
    }, []);
    
    const addToCart =(movie:IMovie)=>{
        setCart([...cart, movie]);
    }
    
    
return (
    <>
        <h1>Movies</h1>
        <button>Go to cart({cart.length})</button>
        <Grid columns={3}>
        {movies.map((movie:IMovie)=>{
            return(
                <Grid.Column key={movie.id}>
                    <Card className="cardHeight">
                        <Card.Content>
                                <Card.Header>{movie.name}</Card.Header>
                            
                                <Card.Description>
                                <img className="image" src={movie.imageUrl} alt="Movie image"/>
                                <p>Price: {movie.price}</p>
                                <button onClick={()=>addToCart(movie)}>Add to Cart</button>
                                </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>  
            )
    })}
        </Grid>
    </>
);




}

