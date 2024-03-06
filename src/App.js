import Header from './components/header';
import Home from './pages/home';
import Cart from './pages/cart';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header ></Header>
      <Routes>
         <Route exact path="/" element={<Home/>}></Route>
         <Route exact path="/cart" element={<Cart/>}></Route>

      </Routes>
    </div>
    
  );
}

export default App;
