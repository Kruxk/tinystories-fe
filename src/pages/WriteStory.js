import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePrompt, postStory } from "../store/prompts/actions";
import { selectSinglePrompt } from "../store/prompts/selectors";

export default function WriteStory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const prompt = useSelector(selectSinglePrompt);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function submitForm(event) {
    event.preventDefault();
    const userId = 1;
    dispatch(postStory(description, name, parseInt(id), userId));
  }

  useEffect(() => {
    dispatch(getSinglePrompt(id));
  }, [dispatch, id]);

  const render = () => {
    return (
      <Container>
        <div>
          <h1>Title: {prompt.name}</h1>
          <p>{prompt.description}</p>
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
              <Form.Label>Write your Story:</Form.Label>

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
              <Button variant="primary" type="submit" onClick={submitForm}>
                Submit Story
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    );
  };

  return <div>{Object.keys(prompt).length ? render() : <p>loading</p>}</div>;
}
