import Shop from './Components/Shop_page/Shop';
import './Css/App.css';
import Products from './Components/Product_page/Product'
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Footer from './Components/Footer'
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout';


let  App = ()=>{

  
return <>



      <BrowserRouter>  
         <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/product" element={<Products/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="checkout" element={<Checkout/>}/>
         </Routes>
      </BrowserRouter>

     
</>
}
export default App;
