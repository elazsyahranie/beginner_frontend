import React, { Component } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import tickitzLogoWhite from "../components/img/tickitz_1.png";
import myStyle from "./LogIn.module.css";
import FacebookButton from "../components/img/icons/bx_bxl-facebook-circle.png";
import GoogleButton from "../components/img/icons/flat-color-icons_google.png";

class LogIn extends Component {
  render() {
    return (
      <>
        <Row className="w-100 min-vw-100 min-vh-100">
          <Col
            lg={7}
            md={7}
            sm={7}
            xs={12}
            className={`${myStyle.leftSide} w-100 h-100`}
          >
            <Row className={`${myStyle.purpleBackground} h-100`}>
              <Col lg={6} md={6} sm={6} xs={6} className="mx-auto my-auto">
                <img src={tickitzLogoWhite} className="img-fluid" alt=""></img>
                <h3 className={`${myStyle.whiteText} text-center`}>
                  Wait, Watch, Wow!
                </h3>
              </Col>
            </Row>
          </Col>
          <Col lg={5} md={5} sm={5} xs={12}>
            <Row>
              <Col lg={10} md={10} sm={10} xs={10} className="mx-auto my-5">
                <h1>Sign In</h1>
                <p>
                  Sign in with the data that you entered during registration
                </p>
                <Form onSubmit={this.handleLogin} className={`mt-3`}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      className={myStyle.formHeight}
                      placeholder="Enter email"
                      name="userEmail"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      className={myStyle.formHeight}
                      placeholder="Password"
                      name="userPassword"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    className={myStyle.purpleButton}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </Form>
                <p className={`my-5 text-center`}>
                  Forgot your password? Reset now!
                </p>
                <Row className="d-flex justify-content-between">
                  <Col lg={6} md={6} sm={6} xs={12} className="mt-1">
                    <Button variant="light" className={myStyle.allWhiteButton}>
                      <img
                        src={GoogleButton}
                        className="img-fluid"
                        alt=""
                      ></img>
                      <span className="my-auto mx-3">Google</span>
                    </Button>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12} className="mt-1">
                    <Button variant="light" className={myStyle.allWhiteButton}>
                      <img
                        src={FacebookButton}
                        className="img-fluid my-auto"
                        alt=""
                      ></img>
                      <span className="my-auto mx-3">Facebook</span>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default LogIn;
