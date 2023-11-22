import {React,useState} from 'react'
import './Navbar.css'
import logo from'../Assets/logo1.webp';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu ,setmenu]=useState("home")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt='img'/>
        </div>
        <ul className="nav-menu">
            <li style={{color:'#fff'}} onClick={()=>{setmenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
            <li style={{color:'#fff'}} onClick={()=>{setmenu("all")}}><Link style={{textDecoration:'none'}} to='/products'>All Gifts</Link> {menu==='all'?<hr/>:<></>}</li>
            <li style={{color:'#fff'}} onClick={()=>{setmenu("custom")}}><Link style={{textDecoration:'none'}} to='/filtered_products'>Custom Gifts</Link>{menu==='custom'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signup'><button>Sign-Up</button></Link>
        </div>

    </div>
  );
}

export default Navbar