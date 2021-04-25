import React, { Component } from "react";
import Navbar from "../components/navbar";
import MyFooter from "../components/myfooter";
import Seat from "../components/seat/seat";
// import Footer from "../components/footer";
import myStyle from "./OrderPage.module.css";
import CineOne21 from "../components/img/CineOne.png";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

class OrderPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14"],
    };
  }
  componentDidMount() {
    console.log(this.props.match.params);
  }

  bookingSeat = (seat) => {
    this.setState({
      selectedSeat: [...this.state.selectedSeat, seat],
    });
    console.log(seat);
  };

  booking = () => {
    console.log("booking");
    const booking = JSON.stringify(this.state.selectedSeat);
    localStorage.setItem("bookingSeat", booking);
  };

  render() {
    const { reservedSeat, selectedSeat } = this.state;
    console.log(this.props.location.search);
    return (
      <>
        <Navbar />
        <div className={myStyle.greyBackground}>
          <Container className="pt-5 pb-5">
            <Row>
              <Col lg={9} md={9} sm={9} xs={12} className="mt-2">
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
                    <Row>
                      <Col>
                        <Card>
                          <Card.Body>
                            <div className="my-auto mx-auto">
                              <Seat
                                seatAlphabet="A"
                                reserved={reservedSeat}
                                selected={selectedSeat}
                                bookingSeat={this.bookingSeat.bind(this)}
                              />
                              <Seat
                                seatAlphabet="B"
                                reserved={reservedSeat}
                                selected={selectedSeat}
                                bookingSeat={this.bookingSeat.bind(this)}
                              />
                              <Seat
                                seatAlphabet="C"
                                reserved={reservedSeat}
                                selected={selectedSeat}
                                bookingSeat={this.bookingSeat.bind(this)}
                              />
                              <Seat
                                seatAlphabet="D"
                                reserved={reservedSeat}
                                selected={selectedSeat}
                                bookingSeat={this.bookingSeat.bind(this)}
                              />
                              <Seat
                                seatAlphabet="E"
                                reserved={reservedSeat}
                                selected={selectedSeat}
                                bookingSeat={this.bookingSeat.bind(this)}
                              />
                              <Seat
                                seatAlphabet="F"
                                reserved={reservedSeat}
                                selected={selectedSeat}
                                bookingSeat={this.bookingSeat.bind(this)}
                              />
                              <Seat
                                seatAlphabet="G"
                                reserved={reservedSeat}
                                selected={selectedSeat}
                                bookingSeat={this.bookingSeat.bind(this)}
                              />
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
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
              <Col lg={3} md={3} sm={3} xs={12} className="mt-2">
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
        <MyFooter className="mt-5" />
      </>
    );
  }
}

export default OrderPage;
