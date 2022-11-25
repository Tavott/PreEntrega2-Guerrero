import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const Cart = () => {
    const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext); //cart = []

    return (
        <div>
            {cart.map((prod) => (
                <div key={prod.id}>
                    <img className='imgCheck' src={prod.imageID} alt={prod.title} width="60px" />
                    <div className='checkout'>
                        <h3>{prod.title}</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <button className="btn btn-primary" onClick={() => deleteOne(prod.id)}>
                            Eliminar
                        </button>

                    </div>
                </div>
            ))}
            <h2>Total: {totalPrecio()} $</h2>
            <button className="btn btn-primary" onClick={deleteAll}>Vaciar carrito</button>
            <div className='Checkout'>
                
                <Link className="btn btn-secondary"  to='/checkout'>Checkout</Link>
                <Link className="btn btn-secondary" to={`/`}>Mira mas productos</Link>
            </div>
        </div>
    );
};

export default Cart;