import React from 'react';
import logo from '../logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from './Home.js';
import About from './About.js';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Layout() {
  return (
    <div className="Layout">

      <Router>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <NavLink to="/" exact>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Magnus Grøndalen
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" exact className="nav-link">
                  Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                  About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid style={{padding: "0px"}}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Container>
      </Router>
    
    </div>
  );
}

export default Layout;
