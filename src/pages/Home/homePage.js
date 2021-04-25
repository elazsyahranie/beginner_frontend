import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Cards from "../components/card";
import MiniNavbarShowing from "../components/miniNavbar";
import MiniNavbarSecond from "../components/miniNavbarSecond";
import MyFooter from "../components/myfooter";
// import Footer from "../components/footer";
import myStyle from "./Home.module.css";
import homeHeaderImg from "../components/img/home_image/Group_14.png";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";
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

  // setUpdate = () => {
  //   console.log('Set Update')
  // }

  // updateData = () => {
  //   console.log('Update Data')
  // }

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
              <div className={`${myStyle.textCentered} ${myStyle.purpleText}`}>
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
        <Container className={myStyle.pageVerticalSpacing}>
          <MiniNavbarSecond />
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
        <Container className="py-5">
          <Card className={`${myStyle.vanguardCard}`}>
            <div className={`mx-auto text-center py-4 ${myStyle.purpleText}`}>
              <h5>Be the vanguard of the</h5>
              <h1>Moviegoers</h1>
            </div>
            <div className={`mx-auto text-center`}>
              <Row className="px-2">
                <Col lg={10} md={10} sm={10} xs={12} className="pt-2">
                  <Form>
                    <Form.Control placeholder="Input your name"></Form.Control>
                  </Form>
                </Col>
                <Col lg={2} md={2} sm={2} xs={12} className="pt-2">
                  <Button className={myStyle.purpleButton}>Submit</Button>
                </Col>
              </Row>
            </div>
            <div className={`mx-auto text-center py-4`}>
              <p className={myStyle.greyText}>
                By joining you as a Tickitz member, <br></br> we will always
                send latest updates via email!
              </p>
            </div>
          </Card>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default Home;
