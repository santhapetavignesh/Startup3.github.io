import React, { useState } from 'react'
import '../../Css/Shop_page/Slidebar.css'
import {RiArrowDownSLine} from 'react-icons/ri'
let Slidebar=()=>{
    let Slidebar1=["Shop by Concern", "Shop by category","Shop by product ", "Shop All"]
    let [range1,setrange1]=useState(100)
    let [range2,setrange2]=useState(10)


  return <>
    <div className='slidebarmain'>
        <div className='slidebar'>
            <div className='slidebar1'> 
                    {Slidebar1.map((value,index)=>{
                        if(0==index || 1==index || 2==index)
                            return <div className='slidebarbox'>
                                        <p>{value}<RiArrowDownSLine className='Slideicon'/></p>
                                    </div>
                        if(3==index){
                            return <div className='slidebarbox'>
                            <p>{value}</p>
                        </div> 
                        }            
                })}
            </div>
            <div className='slidebar2'>
                    <p>Sort<RiArrowDownSLine className='Slideiconp'/></p>
            </div>
            <div className='slidebar3'>
                <div className='slidedisplay'>
                    <div className='span'>Rs.0</div>
                    <div className='span'>Rs.{range1}</div>
                </div>    
                <div className='rangemain'>
                    <input type='range' min={100} max={1000}  step={100} value={range1} className='range2' onChange={(e)=>{setrange1(e.target.value)}}/>
                    <h3>Price</h3>
                </div>
                <div className='slidedisplay'>
                    <div className='span'>0 %</div>
                    <div className='span'>{range2} %</div>
                </div>    
                <div className='rangemain'>
                    <input type='range' min={10} max={100}  step={10} value={range2} className='range2' onChange={(e)=>{setrange2(e.target.value)}}/>
                    <h3>Offers %</h3>
                </div>
            </div>
        </div>
    </div>
</>
}
export default Slidebar;