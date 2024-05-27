import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { photo, setLikedPhotos, setDisplayModal } = props;

  return (
    <div className="photo-list__item" >
      <PhotoFavButton setLikedPhotos={setLikedPhotos} id={photo.id} />
      <img className="photo-list__image" src={photo.urls.full} onClick={() => setDisplayModal(true)} />
      <img className="photo-list__user-profile" src={photo.user.profile} />
      <div className="photo-list__user-info">
        <p className="photo-list__user-details ">{photo.user.username}</p>
        <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
