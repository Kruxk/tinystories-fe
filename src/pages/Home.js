import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPrompts } from "../store/prompts/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrompts());
  }, [dispatch]);

  return <div>Home</div>;
}
