import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from '../../assets/Logo.png'
import {Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <img className='nav-img' src={Logo} alt='nav-logo' /> 

                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
              
                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar