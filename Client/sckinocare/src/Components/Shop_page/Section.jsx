import React, { useEffect, useState } from 'react'
import '../../Css/Shop_page/Section.css'
import {AiTwotoneStar,AiOutlineLock,AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
import Loading from './Loading';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';




let Section=()=>{
    let [data,setdata]=useState();
    let [pervious1,setpervious1]=useState(0);
    let [pervious2,setpervious2]=useState(4);
    let [pervious3,setpervious3]=useState(4);
    let [pervious4,setpervious4]=useState(8);
   let updatenext=()=>{
    console.log(data.length)
    if(pervious1<data.length){
        if(pervious1>=0){setpervious1(pervious1+8)}
        if(pervious2>=4){setpervious2(pervious2+8)}
        if(pervious3>=4){setpervious3(pervious3+8)}
        if(pervious4>=8){setpervious4(pervious4+8)} 
    }
   }
    let updatepervious=()=>{
        if(pervious1>0){setpervious1(pervious1-8)}
        if(pervious2>4){setpervious2(pervious2-8)}
        if(pervious3>4){setpervious3(pervious3-8)}
        if(pervious4>8){setpervious4(pervious4-8)}   
    }

    useEffect(()=>{
       axios.get('http://127.0.0.1:4444').then((res)=>{setdata(res.data)}).catch()
       
    },[])

   let  dispatch= useDispatch();

return<>
    <div className='Slidemain'>
        {(data==undefined)?<div className='SlidemainLoading'><Loading/></div>:<><div className='sliderrow1'>
            {data.slice(pervious1,pervious2).map((value)=>{
                return <div className='card'>
                <div className='cardhead'>
                    <img src={value.product_image} alt={''}/>
                    <span><AiTwotoneStar class="spanstart"/><h5>{value.rating}</h5></span>
                </div>
           <h5>{value.product_Name}</h5>
            <p className='cardmoney'><h3>Rs.{value.new_price}</h3><h6>Rs.{value.old_price}</h6></p> 
            <Link to="/product"><button onClick={()=>{dispatch({'type':"product",payload:value})}}>Add to cart<AiOutlineLock className='buttonicon'/></button></Link>
            </div>
            })}
        </div>
        <div className='sliderrow2'>
        {data.slice(pervious3,pervious4).map((value)=>{
                return <div className='card'>
                <div className='cardhead'>
                    <img src={value.product_image} alt={''}/>
                    <span><AiTwotoneStar class="spanstart"/><h5>{value.rating}</h5></span>
                </div>
           <h5>{value.product_Name}</h5>
            <p className='cardmoney'><h3>Rs.{value.new_price}</h3><h6>Rs.{value.old_price}</h6></p> 
        <Link to="/product"><button onClick={()=>{dispatch({'type':"product",payload:value})}}>Add to cart<AiOutlineLock className='buttonicon'/></button></Link>
            </div>
            })} 
        </div>
        <div className='sliderbutton'>
            {(pervious1>0)?<><button onClick={updatepervious}><AiOutlineArrowLeft className='buttonprecious'/>Previous</button></>:<><button><AiOutlineArrowLeft className='buttonprecious'/>Previous</button></>}
            {(pervious4<data.length)?<> <button onClick={updatenext}>Next<AiOutlineArrowRight className='buttonnext'/></button></>:<><button>Next<AiOutlineArrowRight className='buttonnext'/></button></>}
        </div></>}
    </div>
</>   
}

export default  Section