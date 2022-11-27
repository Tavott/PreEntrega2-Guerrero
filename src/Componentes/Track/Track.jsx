import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase_config";
import Swal from 'sweetalert2';

const Track = () => {
    const [idOrden, setIdOrden] = useState('');
    const handleOrder = (e) => setIdOrden(e.target.value);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerDatos = () => {
        const orderCollection = collection(db, 'orders');

        getDocs(orderCollection)
            .then((res) => {
                if (res.docs.some((prod) => prod.id === idOrden)) {
                    const filtro = res.docs.filter((prod) => prod.id === idOrden);
                    const products = filtro.map((prod) => {
                        return (
                            [...prod.data().items]
                        );
                    })
                    setItem(products);
                    setLoading(false);
                }
                else {
                    Swal.fire(
                        'El codigo de Seguimiento es invalido',
                        'porfavor ingrese un codigo Valido.!',
                        'error'
                    )

                }
            })
            .catch((error) => {

                console.log(error);
            })
    }
    

    if (!loading) {
        return (
            <>
                <div className='detalle-ordenDeCompra' >
                    <h2>Detalle de los Productos en la orden <b>{idOrden}</b>:</h2>
                    <h2>Estado:</h2>
                    <h4> ¡En preparación! Lo recibirás en los próximos 5 días hábiles desde el día de tú compra.</h4>
                </div>
                {item[0].map((prod) => (
                    <div key={prod.id + prod.cant} className='item-cart'>
                        <img src={prod.imageID} alt={prod.title} width='150px' />
                        <div className='texts-cart' >
                            <h2>{prod.title}</h2>
                            <h3>Cantidad: {prod.cantidad}</h3>
                            <h3>Precio: $ {prod.price * prod.cantidad}</h3>
                        </div>
                    </div>
                ))}
            </>
        )
    } else {
        return (
            <div className='track-form' >
                <h3>Por favor ingresar codigo de Seguimiento</h3>
                <input type='text' style={{ width: '300px', height: '40px', fontSize: 'var(--size-font-text)', margin: '10px 0 10px' }} placeholder='ID Orden' name='idOrdenCompra' value={idOrden} onChange={handleOrder} ></input>
                <button className="btn btn-primary" disabled={idOrden.length !== 20} onClick={() => obtenerDatos()}>Buscar</button>
            </div>
        )
    }
}

export default Track;