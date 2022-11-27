import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";


const Navbar = ({ isInHeader }) => {
    return (
        <nav className="navbar">
            <h1>
                <Link className="links" to="/">
                    <img src={Logo} alt="" />
                </Link>
            </h1>
            <ul>
                <NavLink className="links" to="/categoria/Teclados">
                    Teclados
                </NavLink>
                <NavLink className="links" to="/categoria/PlacasVideo">
                    Placas de Video
                </NavLink>
                <NavLink className="links" to="/categoria/PCArmadas">
                    PC Armadas
                </NavLink>
            </ul>
            <div className='link-style'>
            <Link className="links" to="/cart">
                <CartWidget />
            </Link>
            <Link className="links" to="/track">
                <IoSearchSharp  size={30} />
            </Link>
            </div>
        </nav>
    );
};

export default Navbar;
