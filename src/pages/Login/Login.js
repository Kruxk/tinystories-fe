import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form.Group>
        <Link to="/signup">Click here to sign up</Link>
      </Form>
    </div>
  );
}
