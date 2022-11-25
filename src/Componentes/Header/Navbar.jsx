import React, { useState } from 'react';
import CartWidget from './CartWidget';
import Logo from '../../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
// import LoadingSpinner from '../Loading/Loading';


const Navbar = ({ isInHeader }) => {
    const [loading, setLoading] = useState(true);
    return (
        <nav className="navbar">
            <h1>
                {/* <LoadingSpinner /> */}
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
            <Link className="links" to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
