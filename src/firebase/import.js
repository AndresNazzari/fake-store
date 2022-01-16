import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"

const importFromFetch = () => {
    fetch(`https://fakestoreapi.com/products/`).then((res) => res.json())
        .then((data) => {
            const productsCollection = collection(db, "products")
            data.map((elem) => {
                console.log(elem)
                addDoc(productsCollection, {
                    category: elem.category,
                    description: elem.description,
                    price: elem.price,
                    rating: { rate: elem.rating.rate, count: elem.rating.count },
                    title: elem.title,
                    images: [elem.image, elem.image, elem.image, elem.image],
                }).then((res) => {
                    console.log(res)
                })
            })
        })
}

export default importFromFetch