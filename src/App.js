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
import ChangeProfilePic from "./pages/ChangeProfilePic";
import "./App.css";
import EditStory from "./pages/EditStory";
import EditPrompt from "./pages/EditPrompt";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/changepic" component={ChangeProfilePic} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupForm} />
        <Route exact path="/prompt/new" component={WritePrompt} />
        <Route path="/prompt/edit/:id" component={EditPrompt} />
        <Route path="/prompt/:id" component={Prompt} />
        <Route path="/write/:id" component={WriteStory} />
        <Route path="/editstory:id" component={EditStory} />
      </Switch>
    </div>
  );
}

export default App;
