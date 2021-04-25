import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import style from "./card.module.css";
import { withRouter } from "react-router-dom";

// withRouter dibtuhkan jika kita ingin menggunakan history.push

class Cards extends Component {
  setUpdate = () => {
    console.log("Set Update");
  };

  updateData = () => {
    console.log("Update Data");
  };

  handleMovieDetail = (id) => {
    // [1] = biasanya untuk handling pagination, sort, search
    // this.props.history.push(`/learning/basic-movie-detail?movieId=${id}`);
    // [2] = jika dirasa datanya tidak mau ditampilkan di url
    // this.props.history.push(`/learning/basic-movie-detail`, { data: id });
    // [3] = bisa digunakan untuk detail produk/data
    this.props.history.push(`/pages/MovieDetails/${id}`);
    console.log(id);
  };

  // handleDetailMovie = (id) => {
  //   this.props.history.push = (`../MovieDetails/MovieDetails?movieId=${id}`)
  //   // this.props.history.push = (`/pages/MovieDetails/?movieId=${id}`)
  // }

  render() {
    const { movie_id, movie_name, movie_category } = this.props.data;
    return (
      <>
        <Card
          style={{
            width: "14rem",
            borderRadius: "10px",
            border: "1px solid white",
          }}
          className="text-center"
        >
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            className="img-fluid"
          />
          <Card.Body>
            <div style={{ height: "7rem" }}>
              <Card.Title>{movie_name}</Card.Title>
              <Card.Text>{movie_category}</Card.Text>
              {/* <p>{movie_release_date}</p> */}
            </div>
            <Button
              variant="primary"
              onClick={() => this.handleMovieDetail(movie_id)}
              type="submit"
              className={`${style.purpleButton} w-100 mb-1`}
            >
              Details
            </Button>
            <Button
              variant="primary"
              className={`${style.purpleButton} w-100 mt-1`}
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);

//withRouter(Cards) dibutuhkan kalau kita menggunakan withRouter
