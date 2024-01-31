import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css';
import Dropdown from './Dropdown' 

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 765) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 765) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    } 

    return (
        <>
        <nav className="navbar">
            <div className='navbar-wrapper'>
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className='fas fa-bars'/> MENU
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Us <i className="fas fa-caret-down"/>
                            </NavLink>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products & Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/partners' className='nav-links' onClick={closeMobileMenu}>
                                Partners
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/clients' className='nav-links' onClick={closeMobileMenu}>
                                Clients
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/media' className='nav-links' onClick={closeMobileMenu}>
                                Media <i className="fas fa-caret-down"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="lang">
                        <Link to='/Modal'>
                            <img src="icons/english.png" alt="British flag" className='flag'/>
                            English <img src="icons/Link → ▼.png" alt="down" className='lang-down' />
                        </Link>
                    </div>
                
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
