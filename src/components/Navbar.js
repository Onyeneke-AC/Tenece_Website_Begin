import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css';
import Dropdown from './Dropdown' 

function Navbar() {
    const [dropdown, setDropdown] = useState(false);


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
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <NavLink to='/' className='nav-links'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <NavLink to='/about' className='nav-links'>
                                About Us <i className="fas fa-caret-down"/>
                            </NavLink>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className='nav-links'>
                                Products & Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/partners' className='nav-links'>
                                Partners
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/clients' className='nav-links'>
                                Clients
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/media' className='nav-links'>
                                Media <i className="fas fa-caret-down"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' className='nav-links'>
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
