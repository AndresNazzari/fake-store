import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

const Logo = () => {
	return (
		<Link to='/'>
			<div className='nav_logo'>
				<img src={logo} alt='logo' />
			</div>
		</Link>
	);
};

export default Logo;
