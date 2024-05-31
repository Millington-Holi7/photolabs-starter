import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// Like/favourite button
function PhotoFavButton({ id, setAddToFavouritePhotos, favouritePhotos }) {

  //switches the favIcon when photo id is added to favourite photos array
  const isSelected = favouritePhotos.includes(id);

  return (
    <div className="photo-list__fav-icon" onClick={() => (setAddToFavouritePhotos(id))}>
      <div className="photo-list__fav-icon-svg" >

        <FavIcon selected={isSelected} displayAlert={false} /> {/* Pass the like state as a prop to control the icon's appearance */}

      </div>
    </div>
  );
}

export default PhotoFavButton;


