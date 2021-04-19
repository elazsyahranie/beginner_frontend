import { Component } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import myStyle from "./OrderPage.module.css";
import CineOne21 from "../components/img/CineOne.png";
import { Container, Row, Col, Button } from "react-bootstrap";

class OrderPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className={myStyle.greyBackground}>
          <Container className="pt-5 pb-5">
            <Row>
              <Col lg={7} md={7} sm={7} xs={12} className="mt-2">
                <h5>Movie Selected</h5>
                <div className={myStyle.whiteBox}>
                  <div className="px-3 py-3">
                    <Row className="h-100">
                      <Col className="my-auto">SpiderMan: Homecoming</Col>
                      <Col className="text-right">
                        <Button variant="light">Change Movie</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
                <h5 className="mt-4">Choose Your Seat</h5>
                <div className={myStyle.whiteBox}>
                  <div className="px-3 py-3">
                    <Row style={{ height: "400px" }}>
                      <div className="my-auto mx-auto">Hello World</div>
                    </Row>
                  </div>
                </div>
                <Row className="mt-3">
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <Button className={myStyle.purpleButtonOutline}>
                      Change your movie
                    </Button>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                    <Button className={myStyle.purpleButton}>
                      Checkout Now
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={5} md={5} sm={5} xs={12} className="mt-2">
                <h5>Order Info</h5>
                <div className={myStyle.whiteBox}>
                  <div className="px-3 py-3">
                    <div className="text-center">
                      <img src={CineOne21} alt="" className="img-fluid"></img>
                    </div>
                    <div className="text-center mt-3">
                      <h5>CineOne21 Cinema</h5>
                    </div>
                    <Row className="mt-4">
                      <Col>Movie Selected</Col>
                      <Col className="text-right">Spiderman: Homecoming</Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>Tuesday, 07 July 2020</Col>
                      <Col className="text-right">02.00pm</Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>One Ticket Price</Col>
                      <Col className="text-right text-bold">$10.00</Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>Seat Choosed</Col>
                      <Col className="text-right">C4, C5, C6</Col>
                    </Row>
                    <hr></hr>
                    <Row className="mt-2">
                      <Col>Total Payment</Col>
                      <Col className="text-right">$30</Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer className="mt-5" />
      </>
    );
  }
}

export default OrderPage;
