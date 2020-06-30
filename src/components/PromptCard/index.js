import React from "react";
import { Link } from "react-router-dom";

export default function PromptCard(props) {
  return (
    <div>
      <h1>Title: {props.name}</h1>
      <p>{props.description}</p>
      <p>
        <i>stories:</i> {props.stories.length}
      </p>
      <Link to={`/prompt/${props.id}`}>
        <button>Read</button>
      </Link>
      <Link to={`/write/${props.id}`}>
        <button>Write</button>
      </Link>
    </div>
  );
}
