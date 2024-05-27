import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, setLikedPhotos }) => {

  return (
    <ul className="photo-list">

      {photos.map((photo) => (
        <li key={photo.id} >
          <PhotoListItem
            photo={photo}
            setLikedPhotos={setLikedPhotos}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
