import React, { useState } from 'react';
import '../../Css/Cart_page/Checkout.css';
import Image from '../../Images/View_Images/CheckoutLogo.png';
import Axios  from 'axios';
import { useEffect } from 'react';
import Loading from '../Shop_page/Loading';
import {IoIosArrowDown} from 'react-icons/io'
import {MdKeyboardArrowRight} from 'react-icons/md'
let Checkout=()=>{

    let [data,setdata]=useState();

    useEffect(()=>{
        Axios.get("http://127.0.0.1:4444/cart/all").then((res)=>{
          setdata(res.data);
        }).catch()
    },[])

    let [price,setprice]=useState(0)
    let [delivery,setdelivery]=useState(150)

    useEffect(()=>{
        if(data){
            data.map((val)=>{
                setprice(price+=val.new_price)
            })
        }
        else if(data==undefined){
                setprice(0)
        }
    },[data])
    let carddividedata=["Contact details","Shipping address", "Shipping methods", "Payment Method"]

  return <>
    <div >
        <div className='Checkoutmain'>
        <div className='checkkoutLogo'>
            <img src={Image} alt=''/>
        </div>
        <div className='CheckoutNavbar'>
            <div>Cart </div>/
            <div className='CheckoutNavbardiv2'>Information </div>/
            <div>Payment</div>
        </div>
        <div className='checkoutdivide'>
            <div className='checkoutdivide1'>
                 <div className='checkoutdivideTotal_products'>
                        {
                            (data==undefined)?<></>:<><h1>Total {data.length} Products</h1></>
                        }
                        {
                            (data==undefined)?<><Loading/></>:<>
                                {
                                    data.map((val)=>{
                                    return <div className='checkoutdivideTotal_products_Names'>
                                            <h2>{val.product_Name}</h2>
                                        </div>
                                    })
                                }
                            </>
                        }
                </div>
                <div className='checkoutdivideEdit_products'>
                        <h1>Edit</h1>
                        {
                            (data==undefined)?<><Loading/></>:<>
                                {
                                    data.map((val)=>{
                                        
                                    return <div className='checkoutdivideTotal_products_prices'>
                                                <h2>Rs.{val.new_price}</h2>
                                                <h3>Rs.{val.old_price}</h3>
                                            </div>
                                    })
                                }
                            
                            </>
                        }
                </div>
            </div>
            <div className='checkoutdivide2'>
                <div className='checkoutdivide2_div'>
                    <h>Don't have an account?</h>
                    <p>Log in</p>
                </div>
                {
                   carddividedata.map((val)=>{

                    return  <div className='checkoutdivide2_div1'>
                                <h>{val}</h>
                                <IoIosArrowDown className='checkoutdivide2_div1_icon'/>
                            </div>
                   })
                }
                  <div className='checkoutordersummary'>
                    <h1>Order summary</h1>
                      <div className='checkoutdivide2_div3'>
                            <div className='checkoutproductprice'>
                                <h>Products price</h>
                                <p>Rs.{price}</p>
                            </div>
                            <div className='checkoutdeliveryprice'>
                                <h>Delivery fee</h>
                                <p>Rs.{delivery}</p>
                            </div>
                      </div>  
                  </div>  

                  <div>
                      <div className='checkoutdivide2_div3'>
                            <div className='checkoutSubtotal'>
                                <h>Subtotal </h>
                                <p>Rs.{price+delivery}</p>
                            </div>
                            <div className='checkouttotalWeight'>
                                <h>Total weight</h>
                                <p>800gm</p>
                            </div>
                            <h6>Coupon code</h6>
                            <div className='checkoutinputbox'>
                                <div className='checkoutinputbox_1'>
                                    <input type='text' placeholder='Enter here'/>
                                    <MdKeyboardArrowRight className='checkoutinputbox_3'/>
                                </div>
                                <div className='checkoutinputbox_2'>
                                    <button>Apply</button>
                                </div>
                            </div>
                            <h6 className='checkouth6'>You can only use one discount code per order</h6>
                            <button>Proceed to pay</button>
                      </div>  
                  </div>
            </div>
        </div>
        </div>
        
        <div className='CheckFooter'>
            <div className='CheckFooter1'>
                <div>Shipping policy </div>
                <div>Refund policy</div>
                 <div>Privacy policy</div>
                <div>Privacy policy</div>
            </div>
        </div>
    </div>
    </>
}
export default Checkout