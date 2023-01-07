import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from '../../assets/Logo.png'
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
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="/">Use Muo</a>
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