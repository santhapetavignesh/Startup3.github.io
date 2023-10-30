import React, { useEffect, useState } from 'react';
import '../../Css/Cart_page/Cart.css';
import {RxCross2} from 'react-icons/rx';
import {AiTwotoneStar} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {MdCurrencyRupee} from 'react-icons/md'
import { useSelector } from 'react-redux';

let Cart=()=>{

    let [data,setdata]=useState();

    const Userdata=useSelector((store)=>{
      return store;
    })


    useEffect(()=>{
        Axios.get("http://127.0.0.1:4444/cart/all").then((res)=>{
          console.log(res.data)
          setdata(res.data)
        }).catch()
    },[data])

    let dispatch =useDispatch()

// let [pricing,setpricing]=useState(0)

// useEffect(()=>{
// (data==undefined)?<></>:<>
// {data.filter((val)=>{
//     pricing+=val.new_price
//       setpricing(pricing)
//   })}
// </>
// },[])




let deleteupdateHandler =(value)=>{
    Axios.delete(`http://127.0.0.1:4444/delete/cart/${value}`)
}
  return <>

    <div className='Cartmain'>
          <h1>Cart <RxCross2 className='Cartmainh1'onClick={()=>{
            dispatch({"type":"cart",payload:false})
          }}/></h1>

       { (data == undefined)?<></>:<>
       
       {
          data.map((value)=>{
            return <div  className='cartcontain'>
            <div className='cartimage'>
                <img src={value.product_image} alt=''/>
            </div>
            <div className='cartdetails'>
              <div className='cartdetailsdiv1'>
                  <h1 className='carth1'>{value.product_Name}</h1>
                  <div className='ratingcart'><AiTwotoneStar className='cartstar'/> {value.rating}</div> 
              </div>
              <h3>{value.Sub_title}</h3>
              <h1 className='cartpricing1'>Rs. {value.new_price} <h className='cartpricing2'>Rs.{value.old_price}</h></h1>
              {/* <div className='cartbutton'><button onClick={DecUpdateHandler.bind(this,value.id)} className='cartbutton1'>-</button><p>{datavalue}</p><button className='cartbutton2' onClick={IncUpdateHandler.bind(this,value.id)}>+</button> */}
              {/* </div> */}
              <RiDeleteBin6Line className='cartdelete' onClick={deleteupdateHandler.bind(this,value._id)}/>
              <div className='divline'></div>
            </div>
          </div>
          })
       }
       
       
       
       </>
       
       }
      <div  className='Cartmainbutton'>
        <div className='Cartmainbutton_div1'>
              <h1><MdCurrencyRupee className='Cartmainbutton_icon'/>{(data==undefined)?<>{0}</>:<>{data.map((val)=>{
                
                if(val.new_price){
                  let sum=0;
                 sum+=val.new_price;
                 return sum;
                }
               
              })}</>} | {(data==undefined)?<></>:<>{data.length}</>} Item(s)</h1>
              <h>Charge applicable</h>
        </div>
        <div className='Cartmainbutton_div2'>
          <Link to="/checkout"><button>Go to CheckOut</button></Link>
        </div>
      </div>
      
    </div>
</>
}

export default Cart
