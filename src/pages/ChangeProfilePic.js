import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePic } from "../store/user/actions";
import { useHistory } from "react-router-dom";
import { selectToken } from "../store/user/selectors";

export default function ChangeProfilePic() {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);

  useEffect(() => {
    token === null && history.push("/login");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePic(url));
    history.push("/profile");
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicUrl">
          <Form.Label>Picture URL</Form.Label>
          <Form.Control
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url here"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="dark" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
