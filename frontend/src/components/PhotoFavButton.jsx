import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ setLikedPhotos, id }) {

  const [like, setLike] = useState(false)
  const switchLike = () => {
    setLike(!like)
    setLikedPhotos((prev) => {
      if(!prev.includes(id)){
        const newArr = [...prev, id]
        return newArr;
      }else{
        const filteredArray = prev.filter(element => element !== id)
        return filteredArray;
      }
    })
 
  }

  return (
    <div className="photo-list__fav-icon" onClick={switchLike}>
      <div className="photo-list__fav-icon-svg" >

        <FavIcon selected={like} displayAlert={false} /> {/* Pass the like state as a prop to control the icon's appearance */}

      </div>
    </div>
  );
}

export default PhotoFavButton;