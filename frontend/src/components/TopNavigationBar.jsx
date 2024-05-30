import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ({ selectedTopic, topics, likedPhotos, onSelectTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList selectedTopic={selectedTopic}  topics={topics} onSelectTopic={onSelectTopic} />
      <FavBadge isFavPhotoExist={likedPhotos.length} />
    </div>
  )
}

export default TopNavigationBar;