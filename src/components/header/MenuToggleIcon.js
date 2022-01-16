const MenuToggleIcon = ({ menuToggleHandler, menuOpen }) => {
	return (
		<div className='menuToggleIcon'>
			{!menuOpen ? (
				<img src='../img/icon-menu.svg' alt='' onClick={menuToggleHandler} />
			) : (
				<img src='../img/icon-close.svg' alt='' onClick={menuToggleHandler} />
			)}
		</div>
	);
};

export default MenuToggleIcon;
