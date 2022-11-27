import React, { useState, useContext } from 'react';
import Contador from '../Contador';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {
    const [show, setShow] = useState(true);
    const { addToCart, cantidadDeProducto } = useContext(CartContext);

    const onAdd = (qty) => {
        setShow(false)
        addToCart(item, qty);
    };

    const cantidad = cantidadDeProducto(item.id);

    return (
        <div className="detail">
            <img src={item.imageID} alt={item.title} />
            <article>
                <h2>{item.title}</h2>
                <p>
                    {item.descripcion}
                </p>
                <h3>${item.price}.-</h3>
                <div className="detail-boton">
                    <Button variant="outline-danger">
                        <Link to={`/`}>Mira mas productos</Link>
                    </Button>
                    {show ? (
                        <Contador
                            stock={item.stock}
                            onAdd={onAdd}
                            initial={cantidad}
                        />
                    ) : (
                        <Button variant="outline-danger">
                            <Link to='/cart'>Ir al Carrito</Link>
                        </Button>

                    )}
                </div>
            </article>
        </div>
    );
};


export default ItemDetail;
