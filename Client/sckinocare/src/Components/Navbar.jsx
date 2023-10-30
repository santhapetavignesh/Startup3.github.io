import React from "react";
import{FiSearch} from 'react-icons/fi';
import Ecommercelogo from '../Images/EcommerceLogo.png';
import Vignesh from '../Images/Vignesh.png'
import '../Css/Navbar.css';
import {PiPlugLight} from 'react-icons/pi';
import {TfiBell} from 'react-icons/tfi'
import {IoIosContact, IoIosArrowDown} from 'react-icons/io'


let Navbar=()=>{

return <>
        <div className="navbar">
            <div className="navbarlogo">
                <img src={Ecommercelogo} alt=""/>
            </div>
            <div className="navbarSearchmain">
                <div className="navbarSearch">
                   <p className="navbarSearchicon"> <FiSearch className="fsearch"/></p>
                    <input className="navbarSearchinput" placeholder="Search for Product"/>
                </div>
            </div>
            <div className="navbarusermain">
                <div className="navbarplug">
                    <PiPlugLight className="bplugin"/>
                </div>
                <div className="navbarbell">
                    <TfiBell className="bbell"/>
                </div>
                <div className="navbaruser">
                    <div className="navbaruserimage"><img src={Vignesh} alt="" className="navbaruserimages"/></div>
                    <div className="navbarusername">Vignesh</div>
                    <div className="navbaruserarrow"><IoIosArrowDown/></div>
                </div>
            </div>
        </div>
</>
}
export default Navbar;