import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';




const HomeRoute = (props) => {
  const {topics, photos, setDisplayModal} = props;
  const [likedPhotos,setLikedPhotos] = useState([]);

 
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos}/>
      <PhotoList 
      photos={photos}
      likedPhotos={likedPhotos}
      setLikedPhotos={setLikedPhotos}
      setDisplayModal={setDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;
