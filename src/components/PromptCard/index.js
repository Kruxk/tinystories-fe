import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function PromptCard(props) {
  const user = useSelector(selectUser);
  //console.log("user", user.id);
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
      {user.id ? (
        <Link to={`/write/${props.id}`}>
          <button>Write</button>
        </Link>
      ) : (
        " "
      )}
    </div>
  );
}
