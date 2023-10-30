import React, {useState } from 'react';
import '../../Css/Shop_page/Loading.css'

let Loading=()=>{
    let [value,setvalue]=useState(1)
    let updatevalue=()=>{
        setvalue(value+1)
    }
    setInterval( updatevalue,1000);
  return <>
         <div className='Loading'>
         <div className='Loading1'>Loading Please wait < p>{value}</p></div>
         </div>
</>
}
export default Loading;
