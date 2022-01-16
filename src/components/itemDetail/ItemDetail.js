import { useCartContext } from '../../context/cartContext';
import numeral from 'numeral';
import { useParams } from "react-router-dom";

import ItemGallery from './ItemGallery';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
	const { addToCart } = useCartContext();
	const { id } = useParams()

	const onAdd = (qty) => {
		addToCart(qty, { ...item, id });
	};

	// category: "electronics"
	// description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"
	// image: (4)['https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg']
	// price: 64
	// rating: { rate: 3.3, count: 203 }
	// title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 "

	return (
		<div className='itemDetailContainer'>
			<div className='itemDetailGallery'>
				<ItemGallery images={item.images} />
			</div>
			<div className='itemDetailDescription'>
				<h3 className='itemSubTitle'>{item.category}</h3>
				<h1 className='itemTitle'>{item.title}</h1>
				<p className='itemDescription'>{item.description}</p>
				<div className='itemPricesContainer'>
					<div>
						<p className='itemPriceDiscount'>
							{numeral(item.price /* * item.discount */).format('$0,0.00')}
						</p>
						<p className='itemDiscount'>
							0%
							{/* 	{numeral(item.discount).format('0%')} */}
						</p>
					</div>
					<p className='itemPrice'>{numeral(item.price).format('$0,0.00')}</p>
				</div>
				<ItemCount onAdd={onAdd} />
			</div>
		</div>
	);
};

export default ItemDetail;
