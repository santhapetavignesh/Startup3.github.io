import React from 'react';
import View_product from './View_product';
import RelatedProduct from './RelatedProduct';
import RecentlyProduct from './RecentlyProducts';
import '../../Css/Product_page/Products.css';
import Navbar from '../Navbar';
import Footer from '../Footer';


let Product = ()=>{
 
  return<>
    <div className='ProductsContainer'>
    <div className=''><Navbar/></div>
      <div className='ProductsVeiwproducts'><View_product/></div>
      <div className='ProductsRelated'><RelatedProduct/></div>
      <div className='ProductsRecently'><RecentlyProduct/></div>
      <div className='Footer'><Footer/></div>
    </div>

            
       


</>
}
export default Product;