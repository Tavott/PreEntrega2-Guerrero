import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Checkout from '../Checkout/Checkout'

import "./Cart.css";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const messageConditional = (
        <div className="Mensaje">Ops!
            <h2>!Tu carrito esta Vacio!</h2>
            <p> Mira nuestro catalogo! Miles de productos te esperan.</p>
            <Link to="/" className="btn btn-primary">
                Ir a comprar
            </Link>

            <h2>Si tienes un codigo de Seguimiento, porfavor presiona aqui:</h2>
            
            <Link className="btn btn-secondary" to='/track'>Seguimiento</Link>
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