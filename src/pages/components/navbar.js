import React, { Component } from "react";
// import { Link } from "react-router-dom";
import tickitzLogo from "../components/img/Tickitz_2.png";
import styles from "./navbar.module.css";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

// const myStyle = {
//   myOwnStyle: {
//     paddingTop: "4rem",
//   },
// };

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className={[styles.bgWhite]}>
          <Container>
            <Navbar.Brand href="#home">
              <img src={tickitzLogo} alt=""></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Movies</Nav.Link>
                <Nav.Link href="#link">Cinemas</Nav.Link>
                <Nav.Link href="#link">Buy Ticket</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
