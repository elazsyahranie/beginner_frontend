import React, { Component } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import tickitzLogoWhite from "../components/img/tickitz_1.png";
import myStyle from "./LogIn.module.css";
import FacebookButton from "../components/img/icons/bx_bxl-facebook-circle.png";
import GoogleButton from "../components/img/icons/flat-color-icons_google.png";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";

class LogIn extends Component {
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

  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state.form);
    this.props.login(this.state.form).then((result) => {
      // console.log(result.value.data.data.token);
      // localStorage.setItem("token", )
      console.log(this.props.auth.data.token);
      localStorage.setItem("token", this.props.auth.data.token);
      // this.props.history.push("")
    });
  };

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <>
        <Row className="w-100 min-vw-100 min-vh-100">
          <Col
            lg={7}
            md={7}
            sm={7}
            xs={12}
            className={`${myStyle.leftSide} w-100 h-100 d-none d-md-block`}
          >
            <Row className={`${myStyle.purpleBackground} h-100`}>
              <Col
                lg={6}
                md={8}
                sm={8}
                className="mx-auto my-auto hidden-xs-down"
              >
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
                      value={userEmail}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      className={myStyle.formHeight}
                      placeholder="Password"
                      name="userPassword"
                      value={userPassword}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Form.Group>
                  <Button className={myStyle.purpleButton} type="submit">
                    Sign In
                  </Button>
                  {/* Submit, handling event di dalam form. Button, onClick pada button  */}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
