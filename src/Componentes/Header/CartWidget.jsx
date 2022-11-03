import React from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <BsFillCartCheckFill size={27} />
            <span>10</span>
        </div>
    );
};

export default CartWidget;
