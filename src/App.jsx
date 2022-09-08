import { Route ,Navigate , Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from './pages/Product'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

const App = () => {


  return (
    <React.Fragment>
      <Routes>
        <Route path= '/register' element={<Register/>} />
        <Route path= '/login' element={<Login/>} />
        <Route path= '/cart' element={<Cart/>} />
        <Route path= '/products' element={<ProductList/>} />
        <Route path= '/product' element={<Product/>} />
        <Route path= '/home' element= {<Home/>} />
        <Route path= '/' element={ <Navigate to ='/home' /> } />
      </Routes>
    </React.Fragment>
  )
  

};

export default App;