import React, { useState } from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import './styles/PhotoList.scss'

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,

  
};
//
const photos = [];
for(let i= 0; i < 3; i++){
  photos.push(<PhotoListItem key={i} photo={sampleDataForPhotoListItem}/>)
}


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="photo-list">

      {photos}
    </div>
  );
};

export default App;
