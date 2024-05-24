import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const {sampleDataForPhotoListItem} = props;
  return (
    <div className="PhotoList">
      <img src={sampleDataForPhotoListItem.imageSource} />
      <img src={sampleDataForPhotoListItem.profile} />
      <h5>{sampleDataForPhotoListItem.username}</h5>
      <h5>{sampleDataForPhotoListItem.location.city}{sampleDataForPhotoListItem.location.country}</h5>
    </div>
  )
};

export default PhotoListItem;
