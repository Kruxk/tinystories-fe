import React from "react";

export default function PromptCard(props) {
  return (
    <div>
      <h1>Title: {props.name}</h1>
      <p>{props.description}</p>
      <button>Read</button>
      <button>Write</button>
    </div>
  );
}
