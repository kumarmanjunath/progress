import React from "react";
import Nextpage from "./Nextpage";
import Login from "./Login";
import Register from "./Register";
import "../src/App.css";
import "./Signup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/nextpage' component={Nextpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
