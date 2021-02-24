import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Signup from "./SignUp";
import Login from "./Login";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    //BEM 
    <Router>
    <div className="app">
      {/* <Sidebar /> 
      <Feed />
      <Widgets /> */}
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight:"100vh" }}>
      <AuthProvider>
        <Switch>
        {/* <Route path="/" components={{Sidebar:Sidebar , Feed:Feed, Widgets:Widgets}} /> */}
        {/* <Route path="/" component={Feed} />
        <Route path="/" component={Widgets} /> */}
      <div className="w-100" style={{ maxWidth:"400px"}}>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
      
      </Switch>
      </AuthProvider>
      </Container>
    </div>
    </Router>
  );
}

export default App;
