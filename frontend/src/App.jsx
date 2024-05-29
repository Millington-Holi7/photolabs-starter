import React, { reducer } from 'react';

import './App.scss';
import './styles/PhotoList.scss'
import { useApplicationData } from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {

  // create a place to hold our todos
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // use the fetch API to make an AJAX request to the backend
    fetch('http://localhost:8080/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div className="photo-list">
       {JSON.stringify(todos)}
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        likedPhotos={state.likedPhotos}
        setLikedPhotos={setLikedPhotos}
        setSelectedPhoto={setSelectedPhoto}
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
