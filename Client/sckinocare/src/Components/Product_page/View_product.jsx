import React, { useEffect, useState } from 'react'
import "../../Css/Product_page/ViewProduct.css";
import {AiOutlineLock, AiOutlineShoppingCart,AiTwotoneStar} from 'react-icons/ai';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {VscCircleFilled} from 'react-icons/vsc'
import first from '../../Images/View_Images/1star.jpg';
import secondf from '../../Images/View_Images/2.5star.jpg';
import thirdf from '../../Images/View_Images/3.5star.jpg';
import fourf from '../../Images/View_Images/4.5star.jpg';
import five from '../../Images/View_Images/5star.jpg';
import { useSelector } from 'react-redux';
import Specification from './Specification';
import Review from './Review';
import { useDispatch } from 'react-redux';
import How_to_use from './How_to_use';
import Axios  from 'axios';
import Cart from '../Cart/Cart';

let View_product=()=>{

  let  dispatch= useDispatch();
      const Userdata=useSelector((store)=>{
        return store;
      })

  let data=["Specification","How to use?","Review"]
  let rating=["rating"];
  
  let [image,setimage]=useState(Userdata.products.product_image)

  let [inc,setinc]=useState(1)
  let [newprice,setnewprice]=useState(Userdata.products.new_price)
  let [timecheckinginc,settimecheckinginc] =useState(false)
  let valuechangeinc =(()=>{
        if(inc>=1){
          setinc(inc+1)
        }
        if(inc>=1){
          setnewprice(Userdata.products.new_price+(Userdata.products.new_price*inc))
    
        settimecheckinginc(true)
    setTimeout(()=>{
    settimecheckinginc(false)
    },1000)}
        
  })

  let [timecheckingdec,settimecheckingdec] =useState(false)
  let valuechangedec=()=>{
    if(inc>1){
    setinc(inc-1)}
    if(inc>1){
    setnewprice(-Userdata.products.new_price+(Userdata.products.new_price*inc))
    settimecheckingdec(true)
    setTimeout(()=>{
      settimecheckingdec(false)
    },1000)
    }
  }
  let mouseover=(value)=>{
     setimage(value)
     setstyleimage(true)
  }
  let mouseout=(()=>{
    setimage(Userdata.products.product_image)
    setstyleimage(false)
  })
let [styleimage,setstyleimage]=useState(false)

  let ViewHandler=(data)=>{

      if("Specification"==data){
        dispatch({'type':"specificationvalue",payload:true})
      }
      if("How to use?"==data){
        dispatch({'type':"howtouse",payload:true})
      }
      if("Review"==data){
        dispatch({'type':"review",payload:true})
      }
    console.log(data)
      
  }
  let updatapostHandler=(value)=>{
     Axios.post(`http://127.0.0.1:4444/cart/${value}`)
     dispatch({'type':"cart",payload:true})
    
  }
  
  return<>

    {(Userdata==undefined)?<></>:<>
    <div className='ViewProductMain'>
    
              <div className='ViewProductImage'>
              <div className='ViewBigImage'>
                <img src={Userdata.products.product_image} alt=''/>
              </div>
              {(styleimage)?<><div>
              <img src={image} alt='' className='ViewProductImageimgdiv1'/>
              </div></>:<></>}
            <div className='ViewSmallImagemian'>
              {
                    Userdata.products.product_related_Gallary.slice(0,5).map((value)=>{
                      return  <div className='ViewSmallImage'>
                      <img src={value} alt=''  onMouseOver={mouseover.bind(this,value) } onMouseOut={mouseout.bind(this,Userdata.products.product_image)}/>
                  </div>
                    })
                }
             </div>
            </div>      

      <div className='ViewProductDetails'>
        <h1>{Userdata.products.product_Name}</h1>
        <h3>{Userdata.products.Sub_title}</h3>
        <p><h2>Rs.{newprice}</h2> <h5 className='ViewProductDetailsh5'>Rs {Userdata.products.old_price}</h5></p>
        <div className='ViewProducttaxes'>
          <h4>{Userdata.products.tax_details}</h4>
          <div className='ViewProductbutton'>
            <button onClick={valuechangedec}>-</button>{inc}<button onClick={valuechangeinc}>+</button>
          </div>
        </div>
        <div className='ViewProductrating'>
          {
           rating.map((value,index,arr)=>{
                  if(Userdata.products.rating<2){
                      return <img src={first} alt=''/>
                  }
                  if(Userdata.products.rating<3){
                    return <img src={secondf} alt=''/>
                }
                if(Userdata.products.rating<4){
                  return <img src={thirdf} alt=''/>
              }
              if(Userdata.products.rating<5){
                return <img src={fourf} alt=''/>
            }
            if(Userdata.products.rating<=5){
              return <img src={five} alt=''/>
          }
           })
          }
        </div>
          {(timecheckinginc == true)?<> <div className='ViewProductbuttonquantitydisplay'><h>You've Increased QUANTITY </h><p >{inc}</p></div></>:<></>}
          {(timecheckingdec == true)?<> <div className='ViewProductbuttonquantitydisplaydec'><h>You've Decreased QUANTITY </h><p>{inc}</p></div></>:<></>}
        
        <div className='ViewProducadd'>
          <button className='button1' onClick={updatapostHandler.bind(this,Userdata.products.id)}>Add to cart <AiOutlineLock className='ViewProducaddbutton1'/></button>
          <button className='button2' onClick={updatapostHandler.bind(this,Userdata.products.id)}>Buy Now<AiOutlineShoppingCart className='ViewProducaddbutton1'/></button>
        </div>
        {data.map((value,index)=>{
          if(index==0 || index==1){
          return <div className='ViewProductdata'>
          <p className='ViewProductdatap'>{value}<MdKeyboardArrowRight className='ViewProducaddbutton2' onClick={ViewHandler.bind(this,value)}/></p>
        </div>}
        if(index==2){
          return <div className='ViewProductdata'>
          <p className='ViewProductdatap'><AiTwotoneStar className='ViewProductp'/>{Userdata.products.rating} < VscCircleFilled className='ViewProductp'/> {value}({Userdata.products.review.review_data.length})<MdKeyboardArrowRight className='ViewProducaddbutton3' onClick={ViewHandler.bind(this,value)}/></p>
        </div>}
        })}
      </div>

        {
          ( (Userdata.specificationvalue==true))?<>
              <div className='ViewProductSpecification'><Specification/></div></>:<><div></div></>
        }
        {
          ( (Userdata.review==true))?<>
              <div className='ViewProductSpecification'><Review/></div></>:<><div></div></>
        }
        {
          ( (Userdata.howtouse==true))?<>
              <div className='ViewProductSpecification'><How_to_use/></div></>:<><div></div></>
        }

{
          ( (Userdata.cart==true))?<>
              <div className='ViewProductSpecification1'><Cart/></div></>:<><div></div></>
        }

    </div>
    </>}
</>
}
export default View_product;
