import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectToken } from "../store/user/selectors";
import { Container, Col, Row } from "react-bootstrap";
import { selectPrompts } from "../store/prompts/selectors";
import { fetchStories, getStoriesbyUserId } from "../store/stories/actions";
import { selectStories } from "../store/stories/selectors";
import StoryCard from "../components/StoryCard";
import PromptCard from "../components/PromptCard";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(selectUser);
  const prompts = useSelector(selectPrompts).filter(
    (prompt) => prompt.userId === user.id
  );
  const stories = useSelector(selectStories);
  const token = useSelector(selectToken);

  function test() {
    dispatch(getStoriesbyUserId(user.id));
  }

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    } else {
      //dispatch(fetchStories());
      dispatch(getStoriesbyUserId(user.id));
    }
  }, [dispatch, user.id]);

  const oldRender = () => {
    return (
      <Container>
        <div style={{ display: "flex" }}>
          {/* <button onClick={test}>test</button> */}
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
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
          <div style={{ margin: "1em" }}>
            <h4>My prompts</h4>
            {prompts.map((prompt) => (
              <PromptCard key={prompt.id} {...prompt} />
            ))}
          </div>
        </div>
      </Container>
    );
  };

  const profileToRender = () => {
    return (
      <Container>
        <Row>
          <Col>
            <img
              src="https://picsum.photos/200"
              alt="profile"
              style={{ float: "left" }}
            ></img>
          </Col>
          <Col>
            <h1>{user.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>My prompts</h4>
            {prompts.map((prompt) => (
              <PromptCard key={prompt.id} {...prompt} />
            ))}
          </Col>
          <Col>
            <h4>My stories</h4>
            {stories.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  };
  return <div style={{ fontFamily: "Raleway" }}>{profileToRender()}</div>;
}
