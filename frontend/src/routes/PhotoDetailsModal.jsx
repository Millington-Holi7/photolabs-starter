import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoListItem.scss'
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ displayModal, setDisplayModal, setLikedPhotos }) => {
  const similarPhotos = Object.values(displayModal.similar_photos)

  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(null)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <PhotoFavButton setLikedPhotos={setLikedPhotos} id={displayModal.id} />
      <img className="photo-details-modal__image" src={displayModal.urls.full} />
      <div className="photo-details-modal__header">
        <div className='photo-details-modal__photographer-info'>
        <img className="photo-details-modal__photographer-profile" src={displayModal.user.profile} />
          <p className="photo-details-modal__photographer-details">{displayModal.user.username}</p>
          <p className="photo-details-modal__photographer-location">{displayModal.location.city}, {displayModal.location.country}</p>
      </div>
        </div>
      <div className='photo-details-modal__images'>
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
