import React from 'react';
import HomeRoute from './routes/HomeRoute.jsx';
import './App.scss';
import { useApplicationData } from './hooks/useApplicationData';
import PhotoDetailsModal from './routes/PhotoDetailsModal.jsx';

// Main App component
const App = () => {
  
  // Destructure state and functions from the custom hook
  const { state, setAddToFavouritePhotos, setSelectedPhoto, onSelectTopic} = useApplicationData();

  return (
    <div className="photo-list">
      {/* HomeRoute component to display the main content */}
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        favouritePhotos={state.favouritePhotos}
        setAddToFavouritePhotos={setAddToFavouritePhotos}
        setSelectedPhoto={setSelectedPhoto}
        selectedTopic={state.selectedTopic}
        onSelectTopic={onSelectTopic}
      />

      {/* Conditionally render PhotoDetailsModal if a photo is selected */}
      {state.selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          setAddToFavouritePhotos={setAddToFavouritePhotos}
          favouritePhotos={state.favouritePhotos}
        />
      )}
    </div>
  );
};

export default App;