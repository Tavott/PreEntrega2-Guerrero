import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../../assets/logo.jpg';
import Button from '../../Button';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ isInHeader }) => {
    //console.log(isInHeader);

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
            {/* <li><Button text="Logueo" /></li> */}
            <Link className="links" to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
