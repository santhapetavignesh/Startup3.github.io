import React from 'react';
import '../../Css/Product_page/Specification.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

let Specification=()=>{
    

    const Userdata=useSelector((store)=>{
        return store;
      })

      let  dispatch= useDispatch();

  return<>
        <div className='Specificationmain'>
            <h1>Specification <div className='Specificationmaindiv1' onClick={()=>{dispatch({'type':"specificationvalue",payload:false})}}>x</div></h1>
            {Userdata.products.specification.map((value,index,arr)=>{ 
                return<p>*  {value}</p>
            })}
        </div>
</>
}
export default Specification;
