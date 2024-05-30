import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ photo, setLikedPhotos, setSelectedPhoto, likedPhotos } ) => {
  

  return (
    <div className="photo-list__item" >
      <PhotoFavButton 
      setLikedPhotos={setLikedPhotos} 
      id={photo.id} 
      likedPhotos={likedPhotos} 
      />
      <img className="photo-list__image" src={photo.urls.full} onClick={() => setSelectedPhoto(photo)} />
      <img className="photo-list__user-profile" src={photo.user.profile} />
      <div className="photo-list__user-info">
        <p className="photo-list__user-details ">{photo.user.username}</p>
        <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
