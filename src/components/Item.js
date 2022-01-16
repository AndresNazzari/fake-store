import numeral from "numeral"
import { Link } from "react-router-dom"

const Item = ({ product }) => {

    return product ? (
        <>
            <div className="card">

                <img className="card__img" src={product.images[0]} alt="" />

                <div className="card__detail">
                    <h3>{product.title} </h3>
                    <p>{product.description}</p>
                    <span>{numeral(product.price).format('$ 0.00')}</span>
                    <Link to={`/product/${product.id}`}>Details</Link>
                </div>
            </div>
        </>
    ) : <></>
}

export default Item