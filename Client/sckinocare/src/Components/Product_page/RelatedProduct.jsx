import React, { useEffect, useState } from 'react'
import {AiTwotoneStar,AiOutlineLock,AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
import Loading from '../Shop_page/Loading';
import Axios from 'axios';
import '../../Css/Product_page/RelatedProduct.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

let RelatedProduct=()=>{

    let  dispatch= useDispatch();

    const Userdata=useSelector((store)=>{
        return store;
      })

    let Category=Userdata.products.Category;

    let [data,setdata]=useState()
    useEffect(()=>{
        Axios.post(`http://127.0.0.1:4444/Related/${Category}`).then((res)=>{setdata(res.data)}).catch(()=>{})
    },[])

    const scrollToTop = () => {
        window.scrollTo({
          top: 0
        });
      };
      let updatehandler=(val)=>{
        dispatch({'type':"product",payload:val})
        scrollToTop()
      }

  return <div className='relatedmain'>
            <h1>Related Products</h1>
            <div className='relateddisplay'>
                {
                    (data==undefined)?<><Loading/></>:<>
                   {
                     data.slice(0,5).map((val)=>{
                        return <div className='relatedcard'>
                                    <div className='relatedcard_head'>
                                        <div className='relatedcardimg'>
                                            <img src={val.product_image} alt=''/>
                                        </div>
                                        <div className='relatedrating'><AiTwotoneStar/> {val.rating}</div>
                                    </div>
                                <h3 className='relatedh3'>{val.product_Name}</h3>
                                <div className='relatedprice'><h1>Rs.{val.new_price}</h1> <h3>Rs.{val.old_price}</h3></div>   
                                <Link to="/product"><button className='relatedbutton'onClick={updatehandler.bind(this,val)}>Add to cart <AiOutlineLock onClick={scrollToTop}/></button></Link>  
                                </div>

                    })
                   }
                    </>
                }
            </div>               
         </div>                  
}


export default RelatedProduct;