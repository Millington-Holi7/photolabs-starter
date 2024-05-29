import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';




const HomeRoute = ({ topics, photos, setSelectedPhoto, likedPhotos, setLikedPhotos }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
