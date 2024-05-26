import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import './App.scss';
import './styles/PhotoList.scss'
import TopNavigationBar from 'components/TopNavigationBar';


// 2 WAYS OF PUSHING AN OBJECT TO AN ARRAY WITH A SPECIFIC AMOUNT OF INDEXES
// const photos = [];
// for(let i= 0; i < 3; i++){
//   photos.push(<PhotoListItem key={i} photo={sampleDataForPhotoListItem}/>)
// }
{/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="photo-list">
      <TopNavigationBar />
     <PhotoList />
    </div>
  );
};

export default App;
