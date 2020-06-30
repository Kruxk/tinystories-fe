import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function WritePrompt() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function submitForm(event) {
    event.preventDefault();
    const userId = 2;

    console.log("prompt:", { userId, description, name });
  }

  return (
    <Container>
      <h1>Write a prompt</h1>
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
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit Prompt
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
