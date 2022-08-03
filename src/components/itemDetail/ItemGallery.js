import { useState } from 'react';
import GalleryModal from './GalleryModal';

const ItemGallery = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imgPrincipal, setImgPrincipal] = useState(images[currentSlide]);
    const [modalImgPrincipal, setModalImgPrincipal] = useState(images[currentSlide]);

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = (e) => {
        if (e.target.id === 'toggleModal' || e.target.id === 'galleyModal') {
            setModalOpen(!modalOpen);
        }
    };

    const changeSlide = (e, n) => {
        e.stopPropagation();
        const cantImages = images.length;
        let nextSlide;
        if (n < 0) {
            currentSlide === 0 ? (nextSlide = cantImages) : (nextSlide = currentSlide - 1);
        } else {
            currentSlide === cantImages ? (nextSlide = 0) : (nextSlide = currentSlide + 1);
        }

        if (!e.target.className.includes('modal')) {
            setImgPrincipal(images[nextSlide]);
        }

        setCurrentSlide(nextSlide);
        setModalImgPrincipal(images[nextSlide]);
    };

    return (
        <>
            <div className='carrouselContainer'>
                <img
                    className='imgPrincipal'
                    src={imgPrincipal}
                    alt=''
                    onClick={(e) => toggleModal(e)}
                    id='toggleModal'
                />

                <div className='icon-prev' onClick={(e) => changeSlide(e, -1)}>
                    <img src='../img/icon-previous.svg' alt='' />
                </div>
                <div className='icon-next' onClick={(e) => changeSlide(e, -1)}>
                    <img src='../img/icon-next.svg' alt='' />
                </div>
            </div>

            <div className='thumbnailsContainer'>
                {images.map((image, i) => {
                    return i < 4 ? (
                        <img
                            key={i}
                            className='thumbnails'
                            src={image}
                            alt=''
                            onClick={() => {
                                setImgPrincipal(images[i]);
                                setModalImgPrincipal(images[i]);
                                setCurrentSlide(i);
                            }}
                        />
                    ) : (
                        ''
                    );
                })}
            </div>

            {modalOpen ? (
                <GalleryModal
                    images={images}
                    toggleModal={toggleModal}
                    changeSlide={changeSlide}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    modalImgPrincipal={modalImgPrincipal}
                    setModalImgPrincipal={setModalImgPrincipal}
                />
            ) : (
                ''
            )}
        </>
    );
};

export default ItemGallery;
