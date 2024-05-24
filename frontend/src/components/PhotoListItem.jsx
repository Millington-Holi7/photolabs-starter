import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const {photo} = props;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={photo.imageSource} />
      <img className="photo-list__user-profile"src={photo.profile} />
      <div className="photo-list__user-info">
      <p className="photo-list__user-details ">{photo.username}</p>
      <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
    </div>
    </div>
  )
};

export default PhotoListItem;
