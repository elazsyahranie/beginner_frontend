import { Component } from "react";
// import axios from "axios";
import Navbar from "../components/navbar";
import EbvIdCard from "../components/EbvIdCard";
import CineOne21 from "../components/CineFlix";
import Hiflix from "../components/hiflix";
import myStyle from "./MovieDetails.module.css";
import Footer from "../components/footer";
import { Container, Row, Col, Form } from "react-bootstrap";

class MovieDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //   };
  // }

  // componentDidMount {
  //   this.getData()
  // }

  // getData = () => {};

  render() {
    return (
      <>
        <Navbar />
        <Container className="mt-5 mb-5">
          <Row className={"pt.5 pb-5"}>
            <Col lg={3} md={3} sm={12}>
              <img
                src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                alt=""
              ></img>
            </Col>
            <Col lg={9} md={9} sm={12}>
              <h3>Movie Name Here</h3>
              <p>Movie Category Here</p>
              <Row className="mt-5">
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>Release Date</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>Directed By</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>Duration</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>Casts</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col lg={12} md={12} sm={12} xs={12}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className={myStyle.greyBackground}>
          <Container className="pt-5 pb-5">
            <Row className="justify-content-center">
              <div>
                <Form>
                  <Form.Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Form.Row>
                </Form>
              </div>
            </Row>
          </Container>
          <Container className="pt-5 pb-5">
            <Row>
              <Col lg={3} md={3} sm={3}>
                <EbvIdCard />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <CineOne21 />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Hiflix />
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={3} sm={3}>
                <EbvIdCard />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <CineOne21 />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Hiflix />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default MovieDetails;
