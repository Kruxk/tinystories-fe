import React from "react";

export default function StoryCard(props) {
  return (
    <div>
      <h4>Title: {props.name}</h4>
      <p>{props.description}</p>
    </div>
  );
}
