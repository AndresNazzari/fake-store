import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainter = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "products")

        console.log(category)

        if (category) {
            const cons = query(productsCollection, where("category", "==", category))

            getDocs(cons).then(({ docs }) => {
                setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            }).catch((error) => {
                console.log(error)
                setLoading(true)
            })
        } else {
            getDocs(productsCollection).then(({ docs }) => {
                setProducts(docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setLoading(false)
            }).catch((error) => {
                console.log(error)
                setLoading(true)
            })
        }
    }, [category])

    return loading ? (<p>Cargando productos...</p>) : (
        <>
            {<ItemList products={products} />}
        </>
    )
}

export default ItemListContainter