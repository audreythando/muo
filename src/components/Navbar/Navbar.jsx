import {useState}  from 'react'
import './Navbar.css'
import {Link , NavLink} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import {links } from '../../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

function Navbar() {

    const [isNavShowing , setIsNavShowing]= useState(false);

  return (
    <nav>
        <div className='container nav-container'>
<Link to='/' className='logo' onClick={()=> setIsNavShowing(false)}>

    <img className='nav-img' src={Logo} alt="Nav Logo" />
</Link>
<ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
{
    links.map(({name,path}, index) => {
        return(
            <li key={index}>
<NavLink to={path} className={({isActive})=> isActive ? 'active-nav': ''}
onClick={() => setIsNavShowing (prev => !prev)}>{name}</NavLink>
            </li>
        )
    })
}
</ul>
<button className='nav-toggle-btn' onClick={() => setIsNavShowing (prev => !prev)}>
        {
           isNavShowing ? <MdOutlineClose/> :  <GoThreeBars/>
        }

</button>

        </div>
    </nav>
  )
}

export default Navbar