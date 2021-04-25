import { Component } from "react";
import style from "./component.module.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import CineOne from "./img/CineOne.png";
import axios from "axios";

class ebvIdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        premiere_name: "",
        premiere_price: "",
      },
      form: {
        movie_id: "",
      },
    };
  }

  componentDidMount() {
    console.log("Get Data !");
    axios
      .get(`http://localhost:3001/api/v1/premiere/1`)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.data,
          /* Digunakan untuk memanipulasi data state */
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleOrderPage = (id) => {
    console.log(id);
  };

  render() {
    const { movie_id } = this.state.form;
    // console.log(this.state.data[0]);
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Row style={{ height: "9rem" }}>
              <Col lg={7} md={7} sm={7} xs={7} className="my-auto">
                <img src={CineOne} alt="" class="img-fluid"></img>
              </Col>
              <Col lg={5} md={5} sm={5} xs={5} className="my-auto">
                <Row>
                  <h4>CineOne21</h4>
                </Row>
                <Row>Downcare Street No. 12, East Purwokerto</Row>
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
            <Row className="h-100">
              <Col lg={6} md={6} sm={6} xs={6} className="my-auto">
                <Button
                  variant="primary"
                  className={style.purpleButton}
                  onClick={() => this.handleOrderPage(movie_id)}
                >
                  Book Now
                </Button>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="text-right my-auto">
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
