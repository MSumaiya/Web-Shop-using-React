import React,{useState} from 'react';
import Home, {IMovie} from './components/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export interface ICartItem{
  product: IMovie;
  amount: number;
}


function App() {
  const defaultValue:ICartItem[]=[];
 
  const [cart, setCart] = useState(defaultValue);

  const addToCart =(movie:IMovie):void=>{
    let found = false;
    for(let i=0; i<cart.length; i++){
      if(cart[i].product.id===movie.id){
      cart[i].amount++; 
      found = true;
    }
  }

  if(found===false){
    let newCartItem:ICartItem = {
      product: movie,
      amount: 1
    }
    setCart([...cart, newCartItem]);
  } else {
      let tempCart = cart; 
      for(let i=0; i<cart.length; i++){
        if(tempCart[i].product.id===movie.id){
          tempCart[i].amount++; 
      }
      setCart(tempCart);
    }
    console.log('tempCart: ', tempCart.length);
  }
  console.log('Cart: ', cart.length);
  
  }





  return (
    <div className="App">
    
    <Router>
      <Header></Header>
      <Switch>
      <Route path='/admin'>
      <Admin></Admin>
      </Route>
      <Route path='/cart'>
      <Cart message={cart}></Cart>
      </Route>
      <Route path='/' exact={true}>
        <Home updateMovie={addToCart}></Home>
        </Route>
          </Switch>
    </Router>
          <Footer></Footer>
    </div>
  );
}

export default App;
