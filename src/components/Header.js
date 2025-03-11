import {logo_URL} from './Utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const Header = ()=> {
const [btnLabel,setBtnLabel] = useState("login");

const cart = useSelector((store) => store.cart.items);
console.log(cart,'cart testing',cart.length);

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <button onClick={()=> btnLabel === "login" ? setBtnLabel("logout") : setBtnLabel("login")}>{btnLabel}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;