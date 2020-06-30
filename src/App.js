import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Prompt from "./pages/Prompt";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/prompt/:id" component={Prompt} />
      </Switch>
    </div>
  );
}

export default App;
