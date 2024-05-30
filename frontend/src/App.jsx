import React, { reducer } from 'react';
import HomeRoute from './routes/HomeRoute.jsx';
import './App.scss';
import './styles/PhotoList.scss'
import { useApplicationData } from './hooks/useApplicationData';
import PhotoDetailsModal from './routes/PhotoDetailsModal.jsx';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, setLikedPhotos, setSelectedPhoto, onSelectTopic } = useApplicationData()
  
  console.log('&&', state)
  return (
    <div className="photo-list">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        likedPhotos={state.likedPhotos}
        setLikedPhotos={setLikedPhotos}
        setSelectedPhoto={setSelectedPhoto}
        selectedTopic={state.selectedTopic}
        onSelectTopic={onSelectTopic}
      />

      {state.selectedPhoto && <PhotoDetailsModal
        selectedPhoto={state.selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        setLikedPhotos={setLikedPhotos}
      />}
    </div>
  );
};

export default App;
