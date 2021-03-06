import { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Hiflix from "./img/hiflix.png";

class ebvIdCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Row style={{ height: "9rem" }}>
              <Col lg={7} md={7} sm={7} xs={7} className="my-auto">
                <img src={Hiflix} alt="" class="img-fluid"></img>
              </Col>
              <Col lg={5} md={5} sm={5} xs={5} className="my-auto">
                <Row>
                  <h4>hiflix Cinema</h4>
                </Row>
                <Row>Colonel Street No. 2, East Purwokerto</Row>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col>
                <p className="text-justify">
                  08.30am 10.30am 12.00pm 02.00pm 04.30pm 07.00pm 08.30pm
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                Price
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                <span class="font-weight-bold">$10.00/seat</span>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <Button variant="primary">Book Now</Button>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                <p>Add to cart</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ebvIdCard;
