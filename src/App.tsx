import React,{useState} from 'react';
import Home, {IMovie} from './components/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  /* const defaultValue:IMovie[]=[];
  const [movies, setMovies]=useState(defaultValue);
  const [cart, setCart] = useState(defaultValue);


  const addToCart =(movie:IMovie)=>{
    setCart([...cart, movie]);
} */


  return (
    <div className="App">
    
    <Router>
      <Header></Header>
      <Switch>
      <Route path='/admin'>
      <Admin></Admin>
      </Route>
      <Route path='/cart'>
      <Cart ></Cart>
      </Route>
      <Route path='/' exact={true}>
        <Home ></Home>
        </Route>
          </Switch>
    </Router>
          <Footer></Footer>
    </div>
  );
}

export default App;
