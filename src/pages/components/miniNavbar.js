import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import tickitzLogo from "../components/img/Tickitz_2.png";
import styles from "./navbar.module.css";
import { Navbar, Nav, Form } from "react-bootstrap";

// const myStyle = {
//   myOwnStyle: {
//     paddingTop: "4rem",
//   },
// };

class miniNavbarShowing extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <span className={styles.purpleFont}>Now Showing</span>
              </Nav.Link>
            </Nav>
            <Form inline>
              <Nav.Link href="#home">
                <span className={styles.purpleFont}>view all</span>
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default miniNavbarShowing;
