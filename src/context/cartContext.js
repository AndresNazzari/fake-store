import { createContext, useContext, useState } from 'react';

const cartContext = createContext(); //me devuelve 2 componentes, Provider y Consumer. EL PROVIDER ES NECESARIO PARA ESCRIBIR EL CONTEXTO. EL CONTEXTO POR SI SOLO ES DE SOLO LECTURA

export const { Provider } = cartContext;

export const useCartContext = () => {
	return useContext(cartContext);
};

const CustomProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [totalQty, setTotalQty] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = (qty, item) => {
		setTotalQty(totalQty + qty);
		setTotalPrice(totalPrice + qty * item.price /* * item.discount */);

		if (isInCart(item.id)) {
			const newCart = cart.map((elem) => {
				if (elem.id === item.id) {
					return { ...elem, qty: elem.qty + qty };
				} else {
					return elem;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, { ...item, qty: qty }]);
		}
	};

	const isInCart = (id) => {
		return cart.find((element) => element.id === id);
	};

	const removeFromCart = (item) => {
		setTotalQty(totalQty - item.qty);
		setTotalPrice(totalPrice - item.qty * item.price /* * item.discount */);

		const newCart = cart.filter((e) => e.id !== item.id);
		setCart(newCart);
	};

	const deleteCart = () => {
		console.log("test")
		setCart([]);
		setTotalQty(0);
		setTotalPrice(0);
	};

	const valorDelContexto = {
		totalQty,
		totalPrice,
		cart,
		addToCart,
		removeFromCart,
		deleteCart,
	};

	return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
