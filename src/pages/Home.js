import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrompts } from "../store/prompts/actions";
import { selectPrompts } from "../store/prompts/selectors";
import PromptCard from "../components/PromptCard";
import { Container } from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const prompts = useSelector(selectPrompts);

  useEffect(() => {
    dispatch(getPrompts());
  }, [dispatch]);

  const promptsToRender = () =>
    prompts.map((prompt) => <PromptCard key={prompt.id} {...prompt} />);

  return (
    <Container style={{ fontFamily: "Raleway" }}>
      <h1>Pick your prompt:</h1>
      {promptsToRender()}
    </Container>
  );
}
