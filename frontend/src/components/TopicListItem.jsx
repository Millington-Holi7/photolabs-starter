import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const {topic, onSelectTopic} = props;
  return (
    <div className="topic-list__item" onClick={() => onSelectTopic(topic.id)}>
      {topic.title}
      {props.selected ? "selected" : " "}
    </div>
  );
};

export default TopicListItem;
