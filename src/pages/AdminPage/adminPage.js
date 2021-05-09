import React, { Component } from "react";
// import axios from "axios";
import Navbar from "../components/navbar";
// import Cards from "../components/card";
// import MiniNavbarShowing from "../components/miniNavbar";
// import Footer from "../components/footer";
import MyFooter from "../components/myfooter";
import myStyle from "./adminPage.module.css";
// import homeHeaderImg from "../components/img/home_image/Group_14.png";
import { Container, Row, Col, Form } from "react-bootstrap";
import axiosApiInstances from "../../utils/axios";
// import Cards from "../components/card";

class AdminPage extends Component {
  // componentDidMount() {
  //   this.getData();
  // }

  // getData = () => {
  //   axiosApiInstances.get(`https://localhost/3001/movie/1`);
  // };

  render() {
    return (
      <>
        <Navbar />
        <div className={myStyle.greyBackground}>
          <Container className="pt-5 pb-5">
            <div className={myStyle.whiteBox}>
              <Row className="px-4 py-4">
                <Col lg={3} md={3} sm={3} xs={12}>
                  <div className={myStyle.movieDescriptionBorder}>
                    <img
                      src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      alt=""
                      class="img-fluid"
                    ></img>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12}>
                  <Form>
                    <label>Movie Name</label>
                    <input
                      type="text"
                      class="form-control"
                      palceholder="Spiderman: Homecoming"
                    ></input>
                    <label>Category</label>
                    <input
                      type="text"
                      class="form-control"
                      palceholder="Action, Adventure, Sci-Fi"
                    ></input>
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <label>Release Date</label>
                        <Form.Control type="date" placeholder="First name" />
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <label>Duration</label>
                        <Form.Control type="time" placeholder="Last name" />
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12}>
                  <Form>
                    <label>Director</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Jon Watts"
                    ></input>
                  </Form>
                  <Form>
                    <label>Casts</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tom Holland, Michael Keaton, Robert Downey"
                    ></input>
                  </Form>
                  <Form>
                    <Form.Group>
                      <Form.Label>Synopsis</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <MyFooter />
      </>
    );
  }
}

export default AdminPage;
