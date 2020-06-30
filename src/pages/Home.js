import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrompts } from "../store/prompts/actions";
import { selectPrompts } from "../store/prompts/selectors";
import PromptCard from "../components/PromptCard";

export default function Home() {
  const dispatch = useDispatch();
  const prompts = useSelector(selectPrompts);

  useEffect(() => {
    dispatch(getPrompts());
  }, [dispatch]);

  const promptsToRender = () =>
    prompts.map((prompt) => <PromptCard key={prompt.id} {...prompt} />);

  return (
    <div>
      <h1>Home</h1>
      {promptsToRender()}
    </div>
  );
}
