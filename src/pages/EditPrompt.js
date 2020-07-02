import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editPrompt } from "../store/prompts/actions";
import { useHistory, Link, useParams } from "react-router-dom";
import { selectToken } from "../store/user/selectors";
import { selectPromptById } from "../store/prompts/selectors";

export default function EditPrompt() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector(selectToken);
  const history = useHistory();
  const prompt = useSelector(selectPromptById(parseInt(id)));

  const [name, setName] = useState((prompt && prompt.name) || " ");
  const [description, setDescription] = useState(prompt && prompt.description);
  const [formSubmit, setFormSubmit] = useState(false);

  function submitEdit(event) {
    event.preventDefault();
    dispatch(editPrompt(id, description, name));

    setFormSubmit(true);
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
          <Button variant="dark" type="submit" onClick={submitEdit}>
            Submit Edit
          </Button>
        </Form.Group>
      </Form>
    );
  };

  const succesRender = () => {
    return (
      <div>
        <h3>Prompt Edited!</h3>
        <p> Your prompt is now up to date</p>
        {` `}
        <Link to={`/prompt/${id}`}>
          <Button variant="dark">See your prompt</Button>
        </Link>
      </div>
    );
  };

  return (
    <Container style={{ fontFamily: "Raleway" }}>
      <h1>Edit your prompt</h1>
      {formSubmit ? succesRender() : formToRender()}
    </Container>
  );
}
