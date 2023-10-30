import React from 'react';
import FooterLogo from '../Images/FooterLogo.png'
import '../Css/Footer.css';
import {FiMapPin} from'react-icons/fi';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail, AiFillYoutube} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {LiaTwitter} from 'react-icons/lia'
import {BiLogoLinkedin} from 'react-icons/bi'
import footer from '../Images/footer1.png'

let  Footer=()=>{
  return <>
    <footer className='Footer'>
      <div className='Footer1'>
      <a href=""> <img src={FooterLogo} alt="" /></a>
      </div>
      <div className='Footer2'>
            <h3>Pages</h3>
            <ul>
              <li><a>About us</a></li>
              <li><a >Our Expertise</a></li>
              <li><a>Testimonials</a></li>
              <li><a >Skin & Hair</a></li>
              <li><a>Shop</a></li>
            </ul>
      </div>
      <div className='Footer2'>
        <h3>Legal and help</h3>
        <ul>
          <li><a>FAQs</a></li>
          <li><a>Terms of use</a></li>
          <li><a>Privacy policy</a></li>
        </ul>
      </div>
      <div className='Footer2'>
        <h3>Contact us</h3>
        <ul>
          <li><a><FiMapPin className='footericon'/>Address</a></li>
          <li><a><BsTelephone className='footericon'/>Phone numbers</a></li>
          <li><a><AiOutlineMail className='footericon'/>mail id</a></li>
        </ul>
      </div>
      <div className='Footer3'>
        <h3>Social Links</h3>
        <ul>
          <li><a><FaFacebook/></a></li>
          <li><a><LiaTwitter/></a></li>
          <li><a><BiLogoLinkedin/></a></li>
          <li><a><AiFillYoutube/></a></li>
        </ul>
        <li><a><img src={footer} alt=''/></a></li>
      </div>
    </footer>  
</>
}
export default Footer;
  
