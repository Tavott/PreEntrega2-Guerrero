import './App.css';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/Main/Item/ItemListContainer';
import ItemDetailContainer from './Componentes/Main/Item/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
