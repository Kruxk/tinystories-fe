import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postPrompt } from "../store/prompts/actions";
import { useHistory, Link } from "react-router-dom";
import { selectToken, selectUser } from "../store/user/selectors";

export default function WritePrompt() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    dispatch(postPrompt(user.id, description, name));
    setFormSubmit(true);
  }

  function anotherPrompt() {
    setFormSubmit(false);
  }

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [dispatch, history, token]);

  const formToRender = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Title of your Prompt:</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="What is your prompt called?"
          />
        </Form.Group>
        <Form.Group controlId="formBasicTextArea">
          <Form.Label>Write your Prompt:</Form.Label>

          <Form.Control
            as="textarea"
            rows="10"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="In a World..."
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="dark" type="submit" onClick={submitForm}>
            Submit Prompt
          </Button>
        </Form.Group>
      </Form>
    );
  };

  const succesRender = () => {
    return (
      <div>
        <h3>Prompt submitted!</h3>
        <p>thanks for submitting your prompt</p>
        <Button variant="dark" onClick={anotherPrompt}>
          Write another prompt
        </Button>
        {` `}
        <Link to={`/`}>
          <Button variant="dark">See all prompts</Button>
        </Link>
      </div>
    );
  };

  return (
    <Container style={{ fontFamily: "Raleway" }}>
      <h1>Write a prompt</h1>
      {formSubmit ? succesRender() : formToRender()}
    </Container>
  );
}
