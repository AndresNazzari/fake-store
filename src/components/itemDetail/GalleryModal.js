import iconPrev from '../../img/icon-previous.svg';
import iconNext from '../../img/icon-next.svg';

const GalleryModal = ({
	images,
	toggleModal,
	changeSlide,
	setCurrentSlide,
	modalImgPrincipal,
	setModalImgPrincipal,
}) => {
	return (
		<>
			<div id='galleyModal' className='modal' onClick={(e) => toggleModal(e)}>
				<div
					className='closeModal'
					id='toggleModal'
					onClick={(e) => toggleModal(e)}
				>
					<svg width='24' height='25' id='toggleModal'>
						<path
							d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
							fill='#fff'
							fillRule='evenodd'
							id='toggleModal'
						/>
					</svg>
				</div>

				<div className='galleyModalContent'>
					<div className='modalImgPrincipalContainer'>
						<div className='modalIconPrev' onClick={(e) => changeSlide(e, -1)}>
							<img className='modalIcon' src={iconPrev} alt='iconPrev' />
						</div>
						<img
							className='modalImgPrincipal'
							src={modalImgPrincipal}
							alt=''
						/>
						<div className='modalIconNext' onClick={(e) => changeSlide(e, 1)}>
							<img className='modalIcon' src={iconNext} alt='iconNext' />
						</div>
					</div>
					<div className='modalThumbnailsContainer'>
						{images.map((image, i) => {
							return i < 4 ? (
								<img
									key={i}
									className='thumbnails'
									src={image}
									alt=''
									onClick={() => {
										setModalImgPrincipal(images[i]);
										setCurrentSlide(i);
									}}
								/>
							) : (
								''
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default GalleryModal;
