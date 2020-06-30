import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
