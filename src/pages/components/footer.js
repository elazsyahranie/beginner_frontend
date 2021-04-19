import React, { Component } from "react";
// Images
import tickitzLogo from "../components/img/Tickitz_2.png";
import ebvLogo from "../components/img/Vector.png";
import cineOneLogo from "../components/img/CineOne.png";
import hiflix from "../components/img/hiflix.png";

//Logo
import facebook from "../components/img/icons/eva_facebook-outline.png";
import instagram from "../components/img/icons/bx_bxl-instagram.png";
import twitter from "../components/img/icons/eva_twitter-outline.png";
import youtube from "../components/img/icons/feather_youtube.png";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";

class theFooter extends Component {
  render() {
    return (
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>
                <img src={tickitzLogo} alt=""></img>
              </Heading>
              <p>
                Stop waiting in line, buy tickets conveniently, watch movies
                quietly.
              </p>
            </Column>
            <Column>
              <Heading>Explore</Heading>
              <FooterLink href="#">Cinemas</FooterLink>
              <FooterLink href="#">Movie List</FooterLink>
              <FooterLink href="#">My Ticket</FooterLink>
              <FooterLink href="#">Notification</FooterLink>
            </Column>
            <Column>
              <Heading>Our Sponsor</Heading>
              <FooterLink href="#">
                <img src={ebvLogo} alt=""></img>
              </FooterLink>
              <FooterLink href="#">
                <img src={cineOneLogo} alt=""></img>
              </FooterLink>
              <FooterLink href="#">
                <img src={hiflix} alt=""></img>
              </FooterLink>
            </Column>
            <Column>
              <Heading>Follow Us</Heading>
              <FooterLink href="#">
                <img src={facebook} alt=""></img>
                <span style={{ marginLeft: "3px" }}>Tickitz Cinema Id</span>
              </FooterLink>
              <FooterLink href="#">
                <img src={instagram} alt=""></img>
                <span style={{ marginLeft: "3px" }}>tickitz.id</span>
              </FooterLink>
              <FooterLink href="#">
                <img src={twitter} alt=""></img>
                <span style={{ marginLeft: "3px" }}>tickitz.id</span>
              </FooterLink>
              <FooterLink href="#">
                <img src={youtube} alt=""></img>
                <span style={{ marginLeft: "3px" }}>Tickitz Cinema id</span>
              </FooterLink>
            </Column>
          </Row>
          <Row>Copyright Tickitz. All Rights Reserved</Row>
        </Container>
      </Box>
    );
  }
}

export default theFooter;
