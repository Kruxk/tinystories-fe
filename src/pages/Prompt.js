import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePrompt } from "../store/prompts/actions";
import { selectSinglePrompt } from "../store/prompts/selectors";
import StoryCard from "../components/StoryCard";

export default function Prompt() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const prompt = useSelector(selectSinglePrompt);

  useEffect(() => {
    dispatch(getSinglePrompt(id));
  }, [dispatch, id]);

  const render = () => {
    return (
      <Container>
        <div>
          <h1>Title: {prompt.name}</h1>
          <p>{prompt.description}</p>
          {prompt.stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </Container>
    );
  };

  return <div>{Object.keys(prompt).length ? render() : <p>loading</p>}</div>;
}
