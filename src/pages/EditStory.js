import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectStoryById, selectStories } from "../store/stories/selectors";

export default function EditStory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const story = useSelector(selectStoryById(id));
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const history = useHistory();

  const [name, setName] = useState((story && story.name) || "");
  const [description, setDescription] = useState(story && story.description);
  console.log(story);
  return (
    <Container>
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
          <Button variant="dark" type="submit">
            Submit Story
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
