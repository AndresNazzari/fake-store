import { Link } from 'react-router-dom';

const NavBar = ({ menuOpen, menuToggleHandler }) => {
	return (
		<>
			<nav
				className={menuOpen ? 'mavBar menu_open' : 'mavBar'}
				onClick={menuOpen ? menuToggleHandler : () => { }}
			>
				<ul>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/category/electronics'>Electronics</Link>
					</li>
					<li>
						<Link to='/category/jewelery'>Jewelery</Link>
					</li>
					<li>
						<Link to="/category/men's%20clothing">Men's</Link>
					</li>
					<li>
						<Link to="/category/women's%20clothing">Women's</Link>
					</li>
					<li>
						<Link to='/cart'>Cart</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
