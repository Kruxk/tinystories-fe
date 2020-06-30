import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePrompt } from "../store/prompts/actions";
import { selectSinglePrompt } from "../store/prompts/selectors";

export default function Prompt() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const prompt = useSelector(selectSinglePrompt);
  console.log("prompt", prompt);

  useEffect(() => {
    dispatch(getSinglePrompt(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>prompt: {id} </h1>
    </div>
  );
}
