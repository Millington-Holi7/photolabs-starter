import React from "react";
import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      
      {photos.map((photo) => (
         <li key={photo.id}>
         <PhotoListItem photo={photo} />
      </li>
      ))}
    </ul>
  );
};

export default PhotoList;
