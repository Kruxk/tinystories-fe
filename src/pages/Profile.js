import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectToken } from "../store/user/selectors";
import { Container, Col, Row } from "react-bootstrap";
import { selectPrompts } from "../store/prompts/selectors";
import { getStoriesbyUserId } from "../store/stories/actions";
import { selectStories } from "../store/stories/selectors";
import StoryCard from "../components/StoryCard";
import PromptCard from "../components/PromptCard";
import { useHistory, Link } from "react-router-dom";
import PencilIcon from "../components/PencilIcon";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(selectUser);
  const prompts = useSelector(selectPrompts).filter(
    (prompt) => prompt.userId === user.id
  );
  const stories = useSelector(selectStories);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    } else {
      //dispatch(fetchStories());
      dispatch(getStoriesbyUserId(user.id));
    }
  }, [dispatch, user.id, history, token]);

  const profileToRender = () => {
    return (
      <Container>
        <Row>
          <Row>
            <Col style={{ maxWidth: "8em", maxHeight: "3.75em" }}>
              <img
                src={user.picture}
                alt="profile"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </Col>
            <Col
              style={{ position: "relative", left: "-1.9em", bottom: "-2em" }}
            >
              <Link to="/profile/changepic">
                <PencilIcon />
              </Link>
            </Col>
          </Row>
          <Col>
            <h1>{user.name}</h1>
          </Col>
        </Row>
        <Row style={{ marginTop: "2em" }}>
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
