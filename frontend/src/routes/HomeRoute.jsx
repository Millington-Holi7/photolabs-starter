import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import '../styles/HomeRoute.scss';




const HomeRoute = ({ topics, photos, setSelectedPhoto, likedPhotos, setLikedPhotos, selectedTopic, onSelectTopic }) => {

  return (
    <div className="home-route">
      <TopNavigationBar 
      selectedTopic={selectedTopic} 
      topics={topics} 
      likedPhotos={likedPhotos}
      onSelectTopic={onSelectTopic} 
      />
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
