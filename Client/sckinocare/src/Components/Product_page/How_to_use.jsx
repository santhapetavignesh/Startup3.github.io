import React from 'react';
import '../../Css/Product_page/Specification.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

let How_to_use=()=>{

    const Userdata=useSelector((store)=>{
        return store;
      })

      let  dispatch= useDispatch();


  return <>
   
   <div className='Specificationmain'>
            <h1>How to use? <div className='Specificationmaindiv1' onClick={()=>{dispatch({'type':"howtouse",payload:false}, console.log("how to use"))}}>x</div></h1>
            {Userdata.products.how_to_use.map((value,index,arr)=>{ 
                return<p>{index+1} . {value}</p>
            })}
        </div>








  </>
}

export default How_to_use;

