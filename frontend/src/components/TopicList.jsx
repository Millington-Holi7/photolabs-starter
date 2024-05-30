import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, selectedTopic, onSelectTopic }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
          <TopicListItem 
          key={topic.id} 
          topic={topic} 
          selected={topic.id === selectedTopic }
          onSelectTopic={onSelectTopic}/>
      ))}

    </div >
  );
};

export default TopicList;
