import React from 'react';
import PhotoList from '../components/PhotoList'; 
import PhotoFavButton from '../components/PhotoFavButton'; 
import '../styles/PhotoListItem.scss'; 
import '../styles/PhotoDetailsModal.scss'; 
import closeSymbol from '../assets/closeSymbol.svg'; 

// Component to render a modal with photo details
const PhotoDetailsModal = ({ selectedPhoto, setSelectedPhoto, setAddToFavouritePhotos, favouritePhotos }) => {

  // Extract similar photos from the selected photos, if there isn't similar photos then it won't display
  let similarPhotos = [];

  if (selectedPhoto.similar_photos) {
     similarPhotos = Object.values(selectedPhoto.similar_photos);
  }

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        {/* Button to close the modal */}
        <button className="photo-details-modal__close-button" onClick={() => setSelectedPhoto(null)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {/* Button to add or remove photo from favorites */}
      <div className='like-button'>
        <PhotoFavButton
          setAddToFavouritePhotos={setAddToFavouritePhotos}
          id={selectedPhoto.id}
          favouritePhotos={favouritePhotos}
        />
      </div>
      {/* Main photo display */}
      <img className="photo-details-modal__image" src={selectedPhoto.urls.full} />
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">

          {/* Photographer's profile image */}
          <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} />
          <p className="photo-details-modal__photographer-info">

            {selectedPhoto.user.name} <br />

            <span className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </span>
          </p>
        </div>
      </div>
      {/* Display similar photos */}
      {selectedPhoto.similar_photos && (
      <div className="photo-details-modal__images">
        <PhotoList
          setAddToFavouritePhotos={setAddToFavouritePhotos}
          setSelectedPhoto={setSelectedPhoto}
          favouritePhotos={favouritePhotos}
          photos={similarPhotos} />
      </div> )}
    </div>
  );
};

export default PhotoDetailsModal;

