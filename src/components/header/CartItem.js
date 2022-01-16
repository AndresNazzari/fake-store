import numeral from 'numeral';

const CartItem = ({ item, removeFromCart }) => {
	return (
		<div>
			<div className='cart_modal_items'>
				<img src={item.images[0]} alt='' />
				<div>
					<p className='modal_item_title '>{item.name}</p>
					<div className='modal_item_prices'>
						<p className='modal_item_price'>
							{numeral(item.price/*  * item.discount */).format('$0,0.00')} x{' '}
							{item.qty}
						</p>
						<p className='modal_item_total'>
							{numeral(item.price /* * item.discount  */ * item.qty).format('$0,0.00')}
						</p>
					</div>
				</div>
				<button
					className='btnRemoveItem'
					onClick={() => removeFromCart(item)}
				/>
			</div>
		</div>
	);
};

export default CartItem;
