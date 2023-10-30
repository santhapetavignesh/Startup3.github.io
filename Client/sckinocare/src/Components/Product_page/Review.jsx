import React from 'react';
import '../../Css/Product_page/Review.css';
import {AiTwotoneStar} from 'react-icons/ai';
import {GoDotFill} from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

let Review = ()=>{

    const Userdata=useSelector((store)=>{
        return store;
      })

      let  dispatch= useDispatch();

   


  return <>
    <div className='Reviewmain'>
        <h1><AiTwotoneStar/> {Userdata.products.rating} <GoDotFill/> Review ({Userdata.products.review.review_data.length})<div className='reviewdiv1' onClick={()=>{dispatch({'type':"review",payload:false})}}>x</div></h1>

       {
        Userdata.products.review.review_data.map((val,index,arr)=>{

                    if(index==0  || index==2){
                        return   <div className='Reviewbox'>
                        <div className='Reviewbox_line1'>
                            <div className='Reviewboximg' >
                            <img src={Userdata.products.review.review_image[1]} alt={""}/>
                            </div>
                            <h2>{Userdata.products.review.review_name[index]}</h2>
                            <h3>{Userdata.products.review.review_date[index]}</h3>
                        </div>
                        <p>{Userdata.products.review.review_data[index]}</p>
                    </div>
                    }
                    return   <div className='Reviewbox'>
                    <div className='Reviewbox_line1'>
                        <div className='Reviewboximg' >
                        <img src={Userdata.products.review.review_image[2]} alt={""}/>
                        </div>
                        <h2>{Userdata.products.review.review_name[index]}</h2>
                        <h3>{Userdata.products.review.review_date[index]}</h3>
                    </div>
                    <p>{Userdata.products.review.review_data[index]}</p>
                </div>
        })
       }
            
    </div>
</>
}
export default Review;
