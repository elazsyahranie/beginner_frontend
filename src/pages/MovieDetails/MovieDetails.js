import { Component } from "react";
import Navbar from "../components/navbar";
import EbvIdCard from "../components/EbvIdCard";
import CineOne21 from "../components/CineFlix";
import Hiflix from "../components/hiflix";
import myStyle from "./MovieDetails.module.css";
import MyFooter from "../components/myfooter";
import axios from "axios";
// import Footer from "../components/footer";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        premiere_name: "",
        premiere_price: "",
      },
      data: {
        movie_name: "",
        movie_category: "",
        movie_release_date: "",
        duration: "",
        movie_directed_by: "",
        movie_synopsis: "",
        movie_casts: "",
      },
    };
  }

  componentDidMount() {
    const getId = this.props.match.params.id;
    // console.log(getId);
    this.getDataById(getId);
    // Akan menjalankan fungsi yang kita buat. Misalnya this.GetDataById()
  }

  getDataById = (getId) => {
    console.log("Get Data !");
    axios
      .get(`http://localhost:3001/api/v1/movie/${getId}`)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.data[0],
          /* Digunakan untuk memanipulasi data state */
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setUpdate = (getId) => {
    console.log("Set Update !");
    console.log(getId);
    this.setState({
      isUpdate: true,
      id: getId.movie_id,
      form: {
        movieName: getId.movie_name,
        movieCategory: getId.movie_category,
        movieReleaseDate: getId.movie_release_date.slice(0, 10),
      },
    });
  };

  render() {
    const {
      movie_name,
      movie_category,
      movie_release_date,
      movie_directed_by,
      movie_duration,
      movie_synopsis,
      movie_casts,
    } = this.state.data;
    console.log(this.state.data[0]);
    return (
      <>
        <Navbar />
        <Container className="mt-5 mb-5">
          <Row className={"pt.5 pb-5"}>
            <Col lg={3} md={3} sm={12}>
              <Card className={myStyle.moviePoster}>
                <img
                  src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  alt=""
                  className="img-fluid"
                ></img>
              </Card>
            </Col>
            <Col lg={9} md={9} sm={12}>
              <h3>{movie_name}</h3>
              <p className={myStyle.greyText}>{movie_category}</p>
              <Row className="mt-5">
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>
                    Release Date<br></br>
                    <span className={myStyle.greyText}>
                      {movie_release_date}
                    </span>
                  </p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>
                    Directed By<br></br>
                    <span className={myStyle.greyText}>
                      {movie_directed_by}
                    </span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>
                    Duration<br></br>
                    <span className={myStyle.greyText}>{movie_duration}</span>
                  </p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <p>
                    Casts<br></br>
                    <span className={myStyle.greyText}>{movie_casts}</span>
                  </p>
                </Col>
              </Row>
              <hr></hr>
              <Row className="mt-2">
                <Col lg={12} md={12} sm={12} xs={12}>
                  {movie_synopsis}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className={myStyle.greyBackground}>
          <Container className="pt-5 pb-5">
            <Row className="justify-content-center">
              <div>
                <h5 className="text-center">Showtimes & Tickets</h5>
                <Form className="pt-2">
                  <Form.Row>
                    <Col lg={6} md={6} sm={6} xs={12} className="pt-2">
                      <Form.Control type="date" />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12} className="pt-2">
                      <Form.Control as="select">
                        <option>Jakarta</option>
                        <option>Purwokerto</option>
                        <option>Jogjakarta</option>
                      </Form.Control>
                    </Col>
                  </Form.Row>
                </Form>
              </div>
            </Row>
          </Container>
          <Container className="pt-3 pb-5">
            <Row className="d-flex justify-content-center">
              <Col lg={3} md={3} sm={3} xs={12} className="pt-3 pb-4 mx-4">
                <EbvIdCard />
              </Col>
              <Col lg={3} md={3} sm={3} xs={12} className="pt-3 pb-4 mx-4">
                <CineOne21 />
              </Col>
              <Col lg={3} md={3} sm={3} xs={12} className="pt-3 pb-4 mx-4">
                <Hiflix />
              </Col>
            </Row>

            <Row className="d-flex justify-content-center">
              <Col lg={3} md={3} sm={3} className="pt-3 pb-4 mx-4">
                <EbvIdCard />
              </Col>
              <Col lg={3} md={3} sm={3} className="pt-3 pb-4 mx-4">
                <CineOne21 />
              </Col>
              <Col lg={3} md={3} sm={3} className="pt-3 pb-4 mx-4">
                <Hiflix />
              </Col>
            </Row>
          </Container>
        </div>
        <MyFooter />
      </>
    );
  }
}

export default MovieDetails;
