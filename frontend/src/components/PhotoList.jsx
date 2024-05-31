import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, setAddToFavouritePhotos, setSelectedPhoto, favouritePhotos }) => {
  
// displays all the photos depending on which array is sent to it.
  return (
    <ul className="photo-list"  >

      {photos.map((photo) => (
        <li key={photo.id}  >
          <PhotoListItem
            photo={photo}
            setAddToFavouritePhotos={setAddToFavouritePhotos}
            setSelectedPhoto={setSelectedPhoto}
            favouritePhotos={favouritePhotos}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
