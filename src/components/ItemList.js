import Item from "./Item"

const ItemList = ({ products }) => {

    return (
        <div className="cardsContainer">
            {products.map((product, i) => {
                return <Item key={i} product={product} />
            })}
        </div >
    )
}

export default ItemList