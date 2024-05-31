import React from "react";
import PhotoFavButton from "./PhotoFavButton"; // Component for the favorite button
import "../styles/PhotoListItem.scss"; // Styles for the photo list item

// Component to render a photo list item
const PhotoListItem = ({ photo, setAddToFavouritePhotos, setSelectedPhoto, favouritePhotos }) => {
  
  return (
    <div className="photo-list__item">
      {/* Button to add or remove photo from favorites */}
      <PhotoFavButton
        setAddToFavouritePhotos={setAddToFavouritePhotos}
        id={photo.id}
        favouritePhotos={favouritePhotos}
      />
      {/* Photo image, clicking on it sets it as the selected photo */}
      <img
        className="photo-list__image"
        src={photo.urls.full}
        onClick={() => setSelectedPhoto(photo)}
      />

      <div className="photo-list__user-details">

        <img className="photo-list__user-profile" src={photo.user.profile} />

        <p className="photo-list__user-info">
          {photo.user.name} <br/>
         <span className="photo-list__user-location"> {photo.location.city}, {photo.location.country}</span>
        </p>
      </div>
    </div>
  );
};

export default PhotoListItem;

