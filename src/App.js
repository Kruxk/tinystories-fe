import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "./pages/Login/SignupForm";
import Prompt from "./pages/Prompt";
import WriteStory from "./pages/WriteStory";
import WritePrompt from "./pages/WritePrompt";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupForm} />
        <Route exact path="/prompt/new" component={WritePrompt} />
        <Route path="/prompt/:id" component={Prompt} />
        <Route path="/write/:id" component={WriteStory} />
      </Switch>
    </div>
  );
}

export default App;
