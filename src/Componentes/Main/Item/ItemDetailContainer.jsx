import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Loading/Loading';
import { collection, doc, getDoc } from 'firebase/firestore';
import {db } from '../../../services/firebase_config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'Items');
        const ref = doc(collectionProd, idProd);
        
        getDoc(ref)
            .then((res)=> {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
                .catch((error)=>{
                    console.log(error);
                })
                .finally(() =>{
                    setLoading(false);
                });
            

    }, [idProd]);

    if (loading) {
        return (
            <div className="detail-container">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="detail-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
