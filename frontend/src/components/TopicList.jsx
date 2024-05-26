import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];
{/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */ }

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      <ul>
      {sampleDataForTopicList.map((topic) => (
          < li key={ topic.id } >
          <TopicListItem topic={topic} />
         </li>
      ))
      }
      </ul>
    </div >
  );
};

export default TopicList;
