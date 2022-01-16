import { Link } from "react-router-dom"
import numeral from "numeral"
import { useCartContext } from "../../context/cartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase"

const Cart = () => {
    const { cart, totalPrice, removeFromCart, deleteCart } = useCartContext()

    const onBuy = () => {
        console.log("Saving in Database")

        const salesCollection = collection(db, "sales")
        addDoc(salesCollection, {
            buyer: {
                name: "Andres",
                lastName: "Nazzari",
                email: "email@email",
            },
            items: cart,
            date: serverTimestamp(),
            total: 100
        }).then((res) => {
            console.log(res)
        })

        deleteCart()
    }
    console.log(cart)

    return (
        <div className="cartContainer">
            This is the Cart
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <img src={item.images[0]} alt="" />
                                    <p>{item.title}</p>
                                    <p>{numeral(item.price).format('$0,0.00')}</p>
                                </li>)
                        })}
                    </ul>

                    <button onClick={deleteCart}>Clear Cart</button>
                    <span>Total:{numeral(totalPrice).format('$0,0.00')}</span>
                    <button onClick={onBuy}>Buy!</button>

                </>
            ) : <p>Empty Cart</p>
            }

            {/* Agregar form con nombre, telefono, email e items comprados */}

        </div >
    )
}

export default Cart
