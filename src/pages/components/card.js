import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Cards extends Component {
  render() {
    console.log(this.props);
    const { movie_name, movie_category } = this.props.data;
    return (
      <>
        <Card style={{ width: "18rem" }} className="text-center">
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          />
          <Card.Body>
            <Card.Title>{movie_name}</Card.Title>
            <Card.Text>{movie_category}</Card.Text>
            {/* <p>{movie_release_date}</p> */}
            <Button variant="primary" className="w-100 mb-1">
              Details
            </Button>
            <Button variant="primary" className="w-100 mt-1">
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;
