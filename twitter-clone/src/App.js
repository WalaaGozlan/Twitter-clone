import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Signup from "./SignUp";
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    //BEM 
    <AuthProvider>
    <div className="app">
      
      <Sidebar /> 
      <Feed />
      <Widgets />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight:"100vh" }}>
      <div className="w-100" style={{ maxWidth:"400px"}}>
      <Signup />
      </div>
      </Container>
    </div>
    </AuthProvider>
  );
}

export default App;
