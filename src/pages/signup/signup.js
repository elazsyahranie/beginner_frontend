import React, { Component } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import tickitzLogoWhite from "../components/img/tickitz_1.png";
import myStyle from "./signup.module.css";
import FacebookButton from "../components/img/icons/bx_bxl-facebook-circle.png";
import GoogleButton from "../components/img/icons/flat-color-icons_google.png";
import { connect } from "react-redux";
import { Signup } from "../../redux/actions/auth";

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userEmail: "",
        userPassword: "",
      },
    };
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSignup = (event) => {
    event.preventDefault();
    console.log(this.state.form);
    this.props.Signup(this.state.form).then((result) => {
      console.log(result);
    });
  };

  render() {
    const { userEmail, userPassword } = this.state.form;
    return (
      <>
        <Row className="w-100 min-vw-100 min-vh-100">
          <Col lg={7} md={7} sm={7} xs={12} className={`${myStyle.leftSide}`}>
            <Row
              className={`${myStyle.purpleBackground} ${myStyle.tickitzLogo}h-100`}
            >
              <div className="m-5">
                <Col lg={5} md={7} sm={7}>
                  <img
                    src={tickitzLogoWhite}
                    className="img-fluid mb-3"
                    alt=""
                  ></img>
                </Col>
                <Col
                  lg={12}
                  md={12}
                  sm={12}
                  className={`${myStyle.whiteText} mt-5`}
                >
                  <h2 className="pb-4">Let's build your account</h2>
                  <h5 className="fw-light">
                    To be a loyal moviegoer and access of all features, your
                    details are required.
                  </h5>
                  <h5 className="my-4">
                    <span>1</span>
                    <span className="mx-4">Fill your additional details</span>
                  </h5>
                  <h5 className="my-4">
                    <span>2</span>
                    <span className="mx-4">Activate your account</span>
                  </h5>
                  <h5 className="my-4">
                    <span>3</span>
                    <span className="mx-4">Done</span>
                  </h5>
                </Col>
              </div>
            </Row>
          </Col>
          <Col lg={5} md={5} sm={5} xs={12}>
            <Row>
              <Col lg={10} md={10} sm={10} xs={10} className="mx-5 my-5">
                <h5>Fill Your Additional Details</h5>
                <Form onSubmit={this.handleSignup} className={`mt-5`}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="userEmail"
                      value={userEmail}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="userPassword"
                      value={userPassword}
                      onChange={(event) => this.changeText(event)}
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
                      <span className="my-auto mx-3">
                        <Link to="/comingsoon" className={myStyle.blackLink}>
                          Google
                        </Link>
                      </span>
                    </Button>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12} className="mt-1">
                    <Button variant="light" className={myStyle.allWhiteButton}>
                      <img
                        src={FacebookButton}
                        className="img-fluid my-auto"
                        alt=""
                      ></img>
                      <span className="my-auto mx-3">
                        <Link to="/comingsoon" className={myStyle.blackLink}>
                          Facebook
                        </Link>
                      </span>
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

const mapDispatchToProps = { Signup };

export default connect(null, mapDispatchToProps)(signup);
