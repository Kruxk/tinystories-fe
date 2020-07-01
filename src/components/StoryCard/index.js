import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { deleteStory } from "../../store/stories/actions";

export default function StoryCard(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  //console.log("props:", props);
  function deletePressed() {
    dispatch(deleteStory(props.id));
  }

  return (
    <div>
      <h4>Title: {props.name}</h4>
      <p>{props.description}</p>
      {props.userId === user.id ? (
        <button onClick={deletePressed}> Delete </button>
      ) : (
        ""
      )}
    </div>
  );
}
