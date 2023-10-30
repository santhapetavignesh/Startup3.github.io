import '../../Css/Shop_page/Shop.css'
import Slider from './Slidebar';
import Section from './Section';
import Navbar from '../Navbar';
import Footer from '../Footer';

let Shop=(x)=>{
    return <>
            <div className='shopmain'>
                <div className='shopmain3'><Navbar/></div>
                <div className='shopmain1'><Slider/></div>
                <div className='shopmain2'><Section/></div>
                <div className='shopmain4'><Footer/></div>
            </div>
    </>
}

export default Shop
