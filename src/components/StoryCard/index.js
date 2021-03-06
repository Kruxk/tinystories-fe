import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { deleteStory } from "../../store/stories/actions";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling.css";

export default function StoryCard(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  //console.log("props:", props);
  function deletePressed() {
    dispatch(deleteStory(props.id));
  }

  return (
    <div className="card">
      <h4>Title: {props.name}</h4>
      <p>{props.description}</p>
      {props.userId === user.id ? (
        <div>
          <Link to={`/editstory${props.id}`}>
            <Button variant="dark">Edit</Button>
          </Link>
          {` `}
          <Button variant="dark" onClick={deletePressed}>
            Delete
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
