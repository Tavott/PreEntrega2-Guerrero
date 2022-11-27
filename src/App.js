import './App.css';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Track from './Componentes/Track/Track';
// import CssBaseline from "@material-ui/core/CssBaseline";

import ItemListContainer from './Componentes/Main/Item/ItemListContainer';
import ItemDetailContainer from './Componentes/Main/Item/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
// import { Form } from 'react-router-dom';
import  Form  from './Componentes/Form/Form';

const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/categoria/:categoryName"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:idProd"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element ={<Form />} />
                    <Route path="/track" element ={<Track />} />
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
};

export default App;
