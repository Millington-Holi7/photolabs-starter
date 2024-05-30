import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ id, setLikedPhotos, likedPhotos }) {


  const isSelected = likedPhotos.includes(id);

  return (
    <div className="photo-list__fav-icon" onClick={() => setLikedPhotos(id)}>
      <div className="photo-list__fav-icon-svg" >

        <FavIcon selected={isSelected} displayAlert={false} /> {/* Pass the like state as a prop to control the icon's appearance */}

      </div>
    </div>
  );
}

export default PhotoFavButton;


