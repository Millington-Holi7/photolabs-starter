import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, setLikedPhotos, setSelectedPhoto, likedPhotos }) => {

  return (
    <ul className="photo-list"  >

      {photos.map((photo) => (
        <li key={photo.id}  >
          <PhotoListItem
            photo={photo}
            setLikedPhotos={setLikedPhotos}
            setSelectedPhoto={setSelectedPhoto}
            likedPhotos={likedPhotos}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
