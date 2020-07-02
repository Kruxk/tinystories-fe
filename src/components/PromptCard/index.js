import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { deletePrompt } from "../../store/prompts/actions";

export default function PromptCard(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  function deletePressed() {
    dispatch(deletePrompt(props.id));
  }

  return (
    <div>
      <h2>Title: {props.name}</h2>
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
      {props.userId === user.id ? (
        <button onClick={deletePressed}>Delete</button>
      ) : (
        ""
      )}
    </div>
  );
}
