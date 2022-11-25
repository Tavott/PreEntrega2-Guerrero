import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Loading/Loading';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../services/firebase_config';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'Items');

        const ref = categoryName
            ? query(collectionProd, where('categoryID', '==', categoryName))
            : collectionProd;

        getDocs(ref)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
    }, [categoryName]);
    
    if (loading) {
        return (
            <div className="container">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
