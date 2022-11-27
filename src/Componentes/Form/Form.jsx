import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase_config";


const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [direction, setDirection] = useState('');
    const [mail, setMail] = useState('');
    const [orderId, setOrderId] = useState('');
    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();
    const [mailConfirm, setMailConfirm] = useState('')

    const enviarDatos = (e) => {
        e.preventDefault();

        const objOrden = {
            buyer: {
                name,
                lastName,
                telephone,
                direction,
                mail,
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp(),
        };
        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, objOrden)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log('Hubo un error', error);
            });
    };


    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleTelephone = (e) => setTelephone(e.target.value);
    const handleDirection = (e) => setDirection(e.target.value);
    const handleMail = (e) => setMail(e.target.value);
    const handleMailConfirm = (e) => setMailConfirm(e.target.value);


    if (orderId) {
        return (

            <div className="container">
                <div className="py-5 text-center mt-5">
                    <h1>Gracias por elegirnos!</h1>
                    <h2> tu compra tiene el siguiente número de seguimiento {orderId}</h2>
                    <h2> El envio puede demorar de 2 a 5 dias</h2>
                    <Link className="btn btn-outline-primary m-3" to={`/`}>
                        <strong>Mira mas productos</strong>
                    </Link>
                </div>
            </div>
        );
    }
    return (

        <div>

            <h4 className="mt-5">
                Completa el formulario con tus datos para confirmar la compra.
            </h4>

            <form action="" onSubmit={enviarDatos}>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Nombre</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={handleName}
                        value={name}
                        required
                        style={{ paddingTop: "5px" }}
                    // className='btnForm'
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Apellido</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Apellido"
                        name="apellido"
                        onChange={handleLastName}
                        value={lastName}
                        required
                        style={{ paddingTop: "5px" }}
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Telefono</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Telefono"
                        name="telephone"
                        onChange={handleTelephone}
                        value={telephone}
                        required
                        style={{ paddingTop: "5px" }}
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Direccion</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Direcion"
                        name="direction"
                        onChange={handleDirection}
                        value={direction}
                        required
                        style={{ paddingTop: "5px" }}
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        placeholder="Mail"
                        name="mail"
                        onChange={handleMail}
                        value={mail}
                        required
                        style={{ paddingTop: "5px" }}
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Confirme Mail</label>
                    <input
                        type='text'
                        class="form-control"
                        placeholder='Confirme su mail'
                        name='mailConfirm'
                        value={mailConfirm}
                        onChange={handleMailConfirm} />
                    <br></br>
                </div>
                {(mail === mailConfirm) && <button className="btn btn-primary">Enviar</button>}



            </form>


        </div>

    );
};

export default Form;