import React, { Component } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myStyle from "./signup.module.css";
import FacebookButton from "../components/img/icons/bx_bxl-facebook-circle.png";
import GoogleButton from "../components/img/icons/flat-color-icons_google.png";

class signup extends Component {
  render() {
    return (
      <>
        <Row className="w-100 min-vw-100 min-vh-100">
          <Col lg={7} md={7} sm={7} xs={12} className={`${myStyle.leftSide}`}>
            <Row className={myStyle.purpleBackground}>Right Side</Row>
          </Col>
          <Col lg={5} md={5} sm={5} xs={12}>
            <Row>
              <Col lg={10} md={10} sm={10} xs={10} className="mx-5 my-5">
                <h5>Fill Your Additional Details</h5>
                <Form onSubmit={this.handleLogin} className={`mt-5`}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="userEmail"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="userPassword"
                    />
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="I agree to terms and conditions"
                    className="mb-2"
                  />
                  <Button
                    variant="primary"
                    className={myStyle.purpleButton}
                    type="submit"
                  >
                    Join now for free
                  </Button>
                </Form>
                <p className={`my-5 text-center`}>
                  Do you already have an account?{" "}
                  <Link to="/login">Log in</Link>
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

export default signup;
