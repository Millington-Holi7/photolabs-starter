import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import '../styles/HomeRoute.scss';

// HomeRoute component to display the home page
const HomeRoute = ({ topics, photos, setSelectedPhoto, favouritePhotos, setAddToFavouritePhotos,selectedTopic, onSelectTopic }) => {
  
  return (
    <div className="home-route">
      {/* Top navigation bar with topic selection and favorite photos */}
      <TopNavigationBar
        selectedTopic={selectedTopic}
        photos={photos}
        topics={topics}
        favouritePhotos={favouritePhotos}
        onSelectTopic={onSelectTopic}
      />
      {/* List of photos displayed on the home route */}
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        setAddToFavouritePhotos={setAddToFavouritePhotos}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
