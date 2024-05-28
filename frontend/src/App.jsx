import React, { useState } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import './styles/PhotoList.scss'

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(null)
  console.log('display', displayModal, 'setdisplay', displayModal)
  return (
    <div className="photo-list">
      <HomeRoute
        topics={topics}
        photos={photos}
        setDisplayModal={setDisplayModal}
      />

      {displayModal && <PhotoDetailsModal displayModal={displayModal} setDisplayModal={setDisplayModal} />}
    </div>
  );
};

export default App;
