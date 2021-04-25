import { Component } from "react";
import Navbar from "../components/navbar";
import MyFooter from "../components/myfooter";
// import Footer from "../components/footer";
import myStyle from "./PaymentPage.module.css";

// Payment Logos
import GooglePay from "../components/img/logos_google-pay.png";
import Visa from "../components/img/logos_visa.png";
import GoPay from "../components/img/logo_gopay.png";
import PayPal from "../components/img/logos_paypal.png";
import Dana from "../components/img/logo_dana.png";
import BCA from "../components/img/logo_bca.png";
import BRI from "../components/img/logo_bri_smaller.png";
import OVO from "../components/img/ovo.png";

import { Container, Row, Col, Button } from "react-bootstrap";

class PaymentPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className={myStyle.greyBackground}>
          <Container className="pt-5 pb-5">
            <Row>
              <Col lg={7} md={7} sm={7} xs={12} className="mt-2">
                <h5>Payment Info</h5>
                <div
                  className={`${myStyle.whiteBox}`}
                  style={{ height: "27rem" }}
                >
                  <div className="px-3">
                    <Row className="h-100 pt-4 pb-2">
                      <Col lg={6} md={6} sm={6} xs={6} className="my-auto">
                        Date & Time
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                        Tuesday, 07 July 2021 at 02.00pm
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="h-100 pt-2 pb-2">
                      <Col lg={6} md={6} sm={6} xs={6} className="my-auto">
                        Movie Title
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                        Spiderman: Homecoming
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="h-100 pt-2 pb-2">
                      <Col lg={6} md={6} sm={6} xs={6} className="my-auto">
                        Cinema Name
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                        CineOne21
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="h-100 pt-2 pb-2">
                      <Col lg={6} md={6} sm={6} xs={6} className="my-auto">
                        Number of Ticket
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                        3 pieces
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="h-100 pt-2 pb-4">
                      <Col lg={6} md={6} sm={6} xs={6} className="my-auto">
                        Total Payment
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                        $30.00
                      </Col>
                    </Row>
                  </div>
                </div>
                <h5 className="mt-4">Choose A Payment Method</h5>
                <div className={myStyle.whiteBox}>
                  <div className="px-3 py-3">
                    <Row
                      style={{ height: "60px" }}
                      className="text-center my-auto"
                    >
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <div className={myStyle.myBorder}>
                          <div className="p-2">
                            <img
                              src={GooglePay}
                              alt=""
                              className="img-fluid"
                            ></img>
                          </div>
                        </div>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <img src={Visa} alt="" className="img-fluid"></img>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <img src={GoPay} alt="" className="img-fluid"></img>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <img src={PayPal} alt="" className="img-fluid"></img>
                      </Col>
                    </Row>
                    <Row
                      style={{ height: "60px" }}
                      className="text-center my-auto"
                    >
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <img src={Dana} alt="" className="img-fluid"></img>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <img src={BCA} alt="" className="img-fluid"></img>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <img src={BRI} alt="" className="img-fluid"></img>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <img src={OVO} alt="" className="img-fluid"></img>
                      </Col>
                    </Row>
                  </div>
                </div>
                <Row className="mt-3">
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <Button className={myStyle.purpleButtonOutline}>
                      Previous step
                    </Button>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                    <Button className={myStyle.purpleButton}>
                      Pay your order
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={5} md={5} sm={5} xs={12} className="mt-2">
                <h5>Personal Info</h5>
                <div className={myStyle.whiteBox} style={{ height: "27rem" }}>
                  <div className="my-auto">
                    <div className="px-4 py-3">
                      <form>
                        <label className="pt-4">Full Name</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Jonas El-Rodriguez"
                        ></input>
                        <label className="pt-4">Email</label>
                        <input
                          class="form-control"
                          type="email"
                          placeholder="jonasrodri123@gmail.com"
                        ></input>
                        <label className="pt-4">Phone Number</label>
                        <input
                          class="form-control"
                          type="phone"
                          placeholder="+6281445687121"
                        ></input>
                      </form>
                      <Row className="py-4">
                        <Col lg={12} md={12} sm={12} xs={12} className="py-3">
                          Fill your data correctly
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <MyFooter className="mt-5" />
      </>
    );
  }
}

export default PaymentPage;
