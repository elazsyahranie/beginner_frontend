import React, { Component } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

class LogIn extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="h-100">
            <Col
              lg={6}
              md={6}
              sm={6}
              xs={12}
              style={{ backgroundColor: "black", color: "yellow" }}
            >
              <div className="mx-5">Right Side</div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div style={{ width: "27rem" }} className="mx-5">
                <Form onSubmit={this.handleLogin}>
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
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default LogIn;
