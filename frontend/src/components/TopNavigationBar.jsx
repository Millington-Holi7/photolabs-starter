import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import PhotoList from './PhotoList';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ({ selectedTopic, topics, favouritePhotos, onSelectTopic, photos, setAddToFavouritePhotos, setSelectedPhoto}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        setAddToFavouritePhotos={setAddToFavouritePhotos}
        setSelectedPhoto={setSelectedPhoto}
      />}>PhotoLabs</span>
      <TopicList selectedTopic={selectedTopic} topics={topics} onSelectTopic={onSelectTopic} />
      <FavBadge isFavPhotoExist={favouritePhotos.length} />
    </div>
  )
}

export default TopNavigationBar;