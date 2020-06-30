import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { signUp } from "../../store/user/actions";
import { useDispatch } from "react-redux";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();

    dispatch(signUp(name, email, password, picture));

    setPassword("");
    setEmail("");
    setPicture("");
    setName("");
  };

  return (
    <div
      style={{
        width: "30em",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "1.5em",
      }}
    >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="text"
            placeholder="Picture URL"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSignup}>
          Signup
        </Button>
      </Form>
    </div>
  );
}
