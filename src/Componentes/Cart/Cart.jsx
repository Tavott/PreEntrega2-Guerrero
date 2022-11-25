import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Checkout from '../Checkout/Checkout'

import "./Cart.css";

const Cart = () => {
    const { cart} = useContext(CartContext);
    const messageConditional = (
        <div className="Mensaje">Ops!
            <h5>!Tu carrito esta Vacio!</h5>
            <p> Mira nuestro catalogo! Miles de productos te esperan.</p>
            <Link to="/" className="btn btn-primary">
                Ir a comprar
            </Link>
        </div>
    );

    return (
        <div className="cart">
            {cart.length === 0 ? (
                messageConditional
            ) : (
                <div>
                    <Checkout />
                </div>
            )}
        </div>
    );
};

export default Cart;