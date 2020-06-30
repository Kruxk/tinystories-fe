import React from "react";
import { Form, Button } from "react-bootstrap";

const loginForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email adress</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

const signupForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email adress</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="text" placeholder="Picture URL" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );
};

export default function Login() {
  return (
    <div
      style={{
        width: "30em",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "1.5em",
      }}
    >
      {loginForm()}
    </div>
  );
}
