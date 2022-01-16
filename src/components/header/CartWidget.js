import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import CartItem from './CartItem';
import cartIcon from '../../img/icon-cart.svg';

const CartWidget = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const { totalQty, cart, removeFromCart, deleteCart } = useCartContext();

	return (
		<>
			<div
				id={cartOpen ? 'cart_widget_container' : ''}
				onClick={(e) =>
					e.target.id === 'cart_widget_container' ? setCartOpen(!cartOpen) : ''
				}
			></div>

			<div className='cart_widget'>
				<div
					className='cart_widget_icon'
					onClick={() => setCartOpen(!cartOpen)}
				>
					<img src={cartIcon} alt='icon-cart' className='icon-cart' />
					{totalQty > 0 ? <p className='cart_badge'>{totalQty}</p> : ''}
				</div>
				<div
					className={cartOpen ? 'cart_modal cart_modal_visible' : 'cart_modal'}
				>
					<p className='cart_modal_title'>Cart</p>
					<div className='cart_modal_items_container'>
						{cart.map((item) => {
							return (
								<CartItem
									key={item.id}
									item={item}
									removeFromCart={removeFromCart}
								/>
							);
						})}
						{totalQty > 0 ? (
							<>
								<Link to={`/cart`}><button className='btn_checkout'>Go to Cart</button></Link>
								<button className='btn_checkout' onClick={() => deleteCart()}>Empty Cart</button>
							</>
						) : (
							<p className='cart-empty'>Your cart is empty.</p>
						)}
					</div>
				</div>
				<img
					src='../img/image-avatar.png'
					alt='user_avatar'
					className='image-avatar'
				/>
			</div>
		</>
	);
};

export default CartWidget;
/*
 */
