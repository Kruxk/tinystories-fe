import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function StoryCard(props) {
  const user = useSelector(selectUser);

  return (
    <div>
      <h4>Title: {props.name}</h4>
      <p>{props.description}</p>
      {props.id === user.id ? <button> Delete </button> : ""}
    </div>
  );
}
