import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
<img className='logo' src={Logo} alt="logo" />
                <ul className={`nav__links ${click ? 'nav active' : 'nav'}`}>
                    <li >
                        <a href="/">Home</a>
                    </li>
                    <li >
                        <a href="/about">About</a>
                    </li>
                    <li >
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li >
                        <a href="/contact">Contact</a>
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