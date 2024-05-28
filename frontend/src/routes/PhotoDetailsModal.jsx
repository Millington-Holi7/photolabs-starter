import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoListItem.scss'
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ displayModal, setDisplayModal }) => {
  const similarPhotos = Object.values(displayModal.similar_photos)
  console.log(similarPhotos)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className="photo-details-modal_image" src={displayModal.urls.regular} />
      <div className="photo-details-modal_header">
        <img src={displayModal.user.profile} />
        <p className="photo-list__user-details ">{displayModal.user.username}</p>
        <p className="photo-list__user-location">{displayModal.location.city}, {displayModal.location.country}</p>
      </div>
      <div className='photo-details-modal__images'>
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
