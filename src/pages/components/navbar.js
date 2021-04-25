import React, { Component } from "react";
import { Link } from "react-router-dom";
import tickitzLogo from "../components/img/Tickitz_2.png";
import styles from "./navbar.module.css";
import KacaPembesar from "./img/icons/kaca_pembesar.png";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

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
                <Nav.Link as={Link} to="/pages/Home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/pages/PaymentPage">
                  Payment
                </Nav.Link>
                <Nav.Link href="#link">Profile</Nav.Link>
              </Nav>
              <Nav inline>
                <Nav.Link>Location</Nav.Link>
                <Nav.Link>
                  <img src={KacaPembesar} alt="" className="img-fluid"></img>
                </Nav.Link>
                <Button variant="primary" className={styles.purpleButton}>
                  Sign Up
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
