import { useState } from 'react';

import Logo from './Logo';
import CartWidget from './CartWidget';
import NavBar from './NavBar';
import MenuToggleIcon from './MenuToggleIcon';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuToggleHandler = () => {
		setMenuOpen((p) => !p);
	};

	return (
		<>
			<div
				className={menuOpen ? 'navContainer navContainerOpen' : 'navContainer'}
				onClick={menuToggleHandler}
			></div>

			<header>
				<div className='header__nav'>
					<MenuToggleIcon
						menuToggleHandler={menuToggleHandler}
						menuOpen={menuOpen}
					/>
					<Logo />
					<NavBar menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />
				</div>
				<CartWidget />
			</header>
		</>
	);
};

export default Header;
