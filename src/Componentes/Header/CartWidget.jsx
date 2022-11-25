import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsFillCartCheckFill } from "react-icons/bs";
// import LoadingSpinner from '../Loading/Loading';

const CartWidget = () => {
    const { itemTotal } = useContext(CartContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>

                <BsFillCartCheckFill size={30} />
            <span>{itemTotal() !== 0 && itemTotal()}</span>
        </div>
    );
};

export default CartWidget;
