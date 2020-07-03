import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectStoryById } from "../store/stories/selectors";
import { editStory } from "../store/stories/actions";

export default function EditStory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const story = useSelector(selectStoryById(id));
  const token = useSelector(selectToken);
  const history = useHistory();
  const [name, setName] = useState((story && story.name) || "");
  const [description, setDescription] = useState(story && story.description);
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [dispatch, history, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editStory(id, description, name));

    setFormSubmit(true);
  };

  const FormToRender = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Title of your Story:</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="What is your story called?"
          />
        </Form.Group>
        <Form.Group controlId="formBasicTextArea">
          <Form.Label>Edit your Story:</Form.Label>

          <Form.Control
            as="textarea"
            rows="10"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="There once was a..."
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="dark" type="submit" onClick={handleSubmit}>
            Submit Story
          </Button>
        </Form.Group>
      </Form>
    );
  };

  const SuccesRender = () => {
    return (
      <div>
        <h3>Story Edited!</h3>
        <p> Your Story is now up to date</p>
        {` `}
        <Link to={`/prompt/${story.promptId}`}>
          <Button variant="dark">See your Story</Button>
        </Link>
      </div>
    );
  };

  return (
    <Container style={{ fontFamily: "Raleway" }}>
      <h1>Edit your story</h1>
      {formSubmit ? <SuccesRender /> : <FormToRender />}
    </Container>
  );
}
