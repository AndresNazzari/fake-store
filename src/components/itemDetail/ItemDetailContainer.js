import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, getDoc, doc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ProductDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
            .then((result) => {
                setItem(result.data());
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(true);
            });
    }, [id]);

    return loading ? <p>Cargando productos...</p> : <ItemDetail item={item} />;
};

// {/* */ }

export default ProductDetailContainer;
