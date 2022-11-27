import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsFillCartCheckFill } from "react-icons/bs";




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
