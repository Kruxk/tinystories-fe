import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { Container } from "react-bootstrap";
import { selectPrompts } from "../store/prompts/selectors";
import { fetchStories } from "../store/stories/actions";
import { selectStories } from "../store/stories/selectors";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const prompts = useSelector(selectPrompts).filter(
    (prompt) => prompt.userId === user.id
  );
  const stories = useSelector(selectStories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  console.log(user);
  console.log(prompts);
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <div style={{ width: "5em", margin: "0em 1em" }}>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/200"
            alt="profile"
          />
        </div>
        <h4>{user.name}</h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ margin: "1em" }}>
          <h4>My stories</h4>
          {stories.map((story) => (
            <p>{story.description}</p>
          ))}
        </div>
        <div style={{ margin: "1em" }}>
          <h4>My prompts</h4>
          {prompts.map((prompt) => (
            <p>{prompt.description}</p>
          ))}
        </div>
      </div>
    </Container>
  );
}
