import { useState, createContext } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {

        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);

    };

    const deleteAll = () => {
        setCart([]);
    };

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    }

    const itemTotal = () => {
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            count = count += prod.cantidad;
        });
        return count;
    };

    const sumarCantidad = (itemPorAgregar, cantidad) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    cantidad: prodDelCarrito.cantidad + cantidad,
                };
                return productoActualizado;
            } else {
                return prodDelCarrito;
            }
        })
        setCart(cartActualizado);
    }

    const sumarPrecio = () => {
        const precio = cart.reduce((inicial, actual) => inicial + actual.price * actual.cantidad, 0);
        return precio || 0;
    };


    const totalPrecio = () => {
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            count = count += prod.price;
        });
        return count;
    };



    const cantidadDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };



    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, itemTotal, sumarCantidad, sumarPrecio, totalPrecio, cantidadDeProducto, }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;