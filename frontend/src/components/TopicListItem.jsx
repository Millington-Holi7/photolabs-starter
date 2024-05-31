import React from "react";
import "../styles/TopicListItem.scss"; // Styles for the topic list item

// Component to render a topic list item
const TopicListItem = ({ topic, onSelectTopic, selected }) => {
  
  return (
    <div className="topic-list__item" onClick={() => onSelectTopic(topic.id)}>
      {/* Span element to display topic title, with conditional class for selected topic */}
      <span className={`topic-list__item ${selected ? "selected" : ""}`}>
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;

