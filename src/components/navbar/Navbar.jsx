import React, { useState } from 'react'
import './navbar.css'
import {Link,useNavigate} from 'react-router-dom'
import Modal from '../../Modal';
import Cart from '../../screens/Cart/Cart';
import { useCart } from '../ContextReducer';

const Navbar = () => {

  let data = useCart()

  const [cartView,setCartView] = useState(false);
  // console.log(window.location.pathname);
  let styleHome,styleOrders;

  if(window.location.pathname==="/"){
    styleHome="current_item";
    styleOrders="nav__item"
  }
  else if(window.location.pathname==="/myorders"){
    styleOrders="current_item";
    styleHome="nav__item"
  }

  const navigate = useNavigate();

  const delAuth=()=>{
    localStorage.removeItem("authToken");
    navigate('/login')
  }

  return (
    <>
        <div className="nav__container">
            <ul className="nav__list">
                <li className="nav__item"><Link to={'/'} className='link__item'><h2>SwiggyClone</h2></Link></li>
                <li className={styleHome}><Link to={'/'} className='link__item '>Home</Link></li>
                {
                  (localStorage.getItem("authToken"))?<>
                  <li className={styleOrders}><Link to={'/myorders'} className='link__item '>My Orders</Link></li>
                <li className="nav__item"><div onClick={()=>{setCartView(true)}} className='link__item'>My Cart{data.length!==0?("("+data.length+")"):""}</div></li>
                {cartView? <Modal onClose={()=>{setCartView(false)}}><Cart closeCart={()=>{setCartView(false)}}/></Modal>:null}
                <li className="nav__item login-btn"><div onClick={delAuth} className='logout__item'>Log Out</div></li></>
                :<li className="nav__item login-btn" ><Link to={'/signup'} className='link__item'>SignUp</Link></li>
                }
                
                
            </ul>
        </div>
    </>
  )
}

export default Navbar
