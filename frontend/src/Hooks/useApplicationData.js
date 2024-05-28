import  { useState } from 'react';

export const useApplicationData = function (){
  const [displayModal, setDisplayModal] = useState(null)
  const [likedPhotos,setLikedPhotos] = useState([]);
  return {likedPhotos, setLikedPhotos, displayModal, setDisplayModal}
}