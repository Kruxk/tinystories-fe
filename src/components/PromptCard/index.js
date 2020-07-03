import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { deletePrompt } from "../../store/prompts/actions";
import { Button } from "react-bootstrap";
import "../styling.css";

export default function PromptCard(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  function deletePressed() {
    dispatch(deletePrompt(props.id));
  }

  return (
    <div className="card">
      <h3>Writing prompt: {props.name}</h3>
      <p>{props.description}</p>
      <p>
        <i>stories:</i> {props.stories.length}
      </p>
      <div>
        <Link to={`/prompt/${props.id}`}>
          <Button variant="dark">Read</Button>
          {` `}
        </Link>
        {user.id ? (
          <Link to={`/write/${props.id}`}>
            <Button variant="dark">Write</Button>
            {` `}
          </Link>
        ) : (
          " "
        )}
        {props.userId === user.id ? (
          <Link to={`prompt/edit/${props.id}`}>
            <Button variant="dark">Edit</Button>
          </Link>
        ) : (
          ""
        )}{" "}
        {props.userId === user.id ? (
          <Button variant="dark" onClick={deletePressed}>
            Delete
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
