import React, { useEffect, useState } from 'react'
import {AiTwotoneStar,AiOutlineLock} from 'react-icons/ai';
import Loading from '../Shop_page/Loading';
import Axios from 'axios';
import '../../Css/Product_page/RecentlyProduct.css';
import { useSelector } from 'react-redux';

let RecentlyProduct=()=>{

    const Userdata=useSelector((store)=>{
        return store;
      })

    let id=Userdata.products.id;
    let [data,setdata]=useState()
    useEffect(()=>{
        Axios.post(`http://127.0.0.1:4444/Recently/${id}`);
        Axios.get("http://127.0.0.1:4444/recent/all").then((res)=>{setdata(res.data)}).catch((err)=>{console.log(err)})
    },[])

    let slicehndler=()=>{
        if (data.length<5){
            return 0;
        }
        else if(data.length>5 && data.length<10){
            return data.length-4
        }
        else if(data.length>=10){
                return data.length-5
        }
        else if(data.length>8 && data.length>2){
            return data.length-3
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      };
  return <div className='recentlymain'>
            <h1>Recently Products</h1>
            <div className='relateddisplay'>
                {
                    (data==undefined)?<><Loading/></>:<>
                   {
                     data.slice(slicehndler(),data.length).map((val)=>{
                        return <div className='relatedcard'>
                                    <div className='relatedcard_head'>
                                        <div className='relatedcardimg'>
                                            <img src={val.product_image} alt=''/>
                                        </div>
                                        <div className='relatedrating'><AiTwotoneStar/> {val.rating}</div>
                                    </div>
                                <h3 className='relatedh3'>{val.product_Name}</h3>
                                <div className='relatedprice'><h1>Rs.{val.new_price}</h1> <h3>Rs.{val.old_price}</h3></div>   
                                <button className='relatedbutton' onClick={scrollToTop}>Add to cart <AiOutlineLock/></button>     
                                </div>

                    })
                   }
                    </>
                }
            </div>               
         </div>                  
}


export default RecentlyProduct;