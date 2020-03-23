import React from "react";
import Nextpage from "./Nextpage";
import MNextpage from "./mentors/MNextpage";
import Login from "./Login";
import MLogin from "./mentors/MLogin";
import Register from "./mentors/MRegister";
import MRegister from "./Register";
import "../src/App.css";
import "./mentors/MApp.css";
import "./Signup.css";
import "./mentors/MSignup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Detailedpage from "./Detailedpage";
import MDetailedpage from "./mentors/MDetailedpage";
import Detailedpagecss from "./Detailedpage.css";
import MDetailedpagecss from "./mentors/MDetailedpage.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/mlogin' component={MLogin} />
          <Route path='/register' component={Register} />
          <Route path='/mregister' component={MRegister} />
          <Route path='/detail' component={Detailedpage} />
          <Route path='/mdetail' component={MDetailedpage} />
          <Route exact path='/nextpage' component={Nextpage} />
          <Route exact path='/mnextpage' component={MNextpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
