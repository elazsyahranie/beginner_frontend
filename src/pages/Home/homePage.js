import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Cards from "../components/card";
import MiniNavbarShowing from "../components/miniNavbar";
import Footer from "../components/footer";
import myStyle from "./Home.module.css";
import homeHeaderImg from "../components/img/home_image/Group_14.png";
import { Container, Row, Col, Image } from "react-bootstrap";
// import Cards from "../components/card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
      data: [],
      pagination: {},
      page: 1,
      limit: 3,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("Get Data !");
    axios
      .get("http://localhost:3001/api/v1/movie?page=1&limit=4")
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.data,
          pagination: res.data.pagination,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   changeText = (event) => {
  //     this.setState({
  //       form: {
  //         ...this.state.form,
  //         [event.target.name]: event.target.value,
  //       },
  //     });
  //   };

  //   submitData = (event) => {
  //     event.preventDefault();
  //     console.log("Save Data");
  //     console.log(this.state.form);
  //     //proses request post movie
  //   };

  render() {
    return (
      <>
        <Navbar />
        <Container className={myStyle.pageVerticalSpacing}>
          <Row className="w-100">
            <Col lg={6} md={6} sm={6} className="my-auto">
              <div className={myStyle.textCentered}>
                <span>Nearest Cinema, Newest Movie</span>
                <h2>Find Out Now!</h2>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} className="my-auto">
              <div className={myStyle.textCentered}>
                <Image src={homeHeaderImg} fluid />
              </div>
            </Col>
          </Row>
        </Container>
        <div className={myStyle.greyBackground}>
          <Container className={myStyle.pageVerticalSpacing}>
            <MiniNavbarShowing />
            <Row>
              {this.state.data.map((item, index) => {
                return (
                  <Col lg={3} md={3} key={index}>
                    <Cards data={item} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
