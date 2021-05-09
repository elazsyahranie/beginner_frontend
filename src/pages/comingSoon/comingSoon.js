import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import tickitzLogoWhite from "../components/img/tickitz_1.png";
import myStyle from "./comingSoon.module.css";

class comingSoon extends Component {
  render() {
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
            <Row className="w-100 h-100">
              <p className="mx-auto my-auto">Coming soon</p>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default comingSoon;
