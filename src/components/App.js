import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import ItemDetailContainer from './itemDetail/ItemDetailContainer';
import CustomProvider from '../context/cartContext';
import ItemListContainter from './ItemListContainter';
import Cart from './cart/Cart';
import Home from './Home';

const App = () => {
	return (
		<CustomProvider>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<ItemListContainter />} />
						<Route path='/category/:category' element={<ItemListContainter />} />
						<Route path='/product/:id' element={<ItemDetailContainer />} />
						<Route path='/cart' element={<Cart />} />
						{/*<Route path='*' element={<ProductDetailContainer />} /> */}
					</Routes>
				</main>
			</BrowserRouter>
		</CustomProvider>
	);
};

export default App;
