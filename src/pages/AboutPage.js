import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InfoCircle } from "react-bootstrap-icons";

import Contributor from "../components/Contributor";

//Import all images you want to use
const headerImg = require("../static/images/headerImg.png");
const noProfileImg = require("../static/images/no-profile-img.png");

// Add all contributors to this array
let contributors = [
  {
    name: "Ginger Kowal",
    jobTitle: "Gobi Training Lead, GIS Programmer Analyst, NatCap, Stanford University",
    img: require("../static/images/gingerkowal.png"),
  },
  {
    name: "Charlotte Weil",
    jobTitle: "Data scientist, NatCap, Stanford University",
    img: require("../static/images/cw.png"), // if none provided the noProfileImg will be used
  },
  {
    name: "Lori Avila",
    jobTitle: "Training Coordinator, NatCap, Stanford",
    img: require("../static/images/no-profile-img.png"),
  },
  {
    name: "Otgonsuren Avirmed",
    jobTitle: "Mongolia Program Office, Wildlife Conservation Society (WCS)",
    img: require("../static/images/no-profile-img.png"),
  },
  {
    name: "Jade Delevaux",
    jobTitle: "Life Science Researcher, NatCap, Stanford University",
    img: require("../static/images/no-profile-img.png"),
  },
  {
    name: "Anna Häägg",
    jobTitle: "Viewer Support",
    img: require("../static/images/af.png"),
  },
];

function AboutPage(props) {
  return (
    <Container fluid={true} className="p-0 m-0 bg-black color-white">
      {/* About header */}
      <Col
        className="p-5 m-0"
        style={{
          backgroundImage: "url('" + headerImg + "')", // add your own image
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Row className="p-1 justify-content-md-center">
          <h1 className="text-center text-white font-weight-light display-1">
            Bringing Natural Capital Knowledge to Mongolia’s Gobi Steppe
          </h1>
        </Row>
        <hr className="hr-about" />
        <Row className="p-1 justify-content-md-center">
          <h1 className="text-center text-white font-weight-light">
            This four-day virtual event will introduce participants to the Natural Capital Approach and give teams of participants hands-on experience with three ecosystem services models.  
          </h1>
        </Row>
      </Col>

      <Row className="justify-content-center p-4">
        <Col md={7}>
          {" "}
          {/* change the size of the main container*/}
          {/* Here you can include the sections you want in your about page*/}
          {/* Project information*/}
          <Row className=" justify-content-md-center">
            <h5 className="p-4 font-weight-normal ">
              Welcome!
            </h5>
          </Row>
          {/* Agenda */}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              Agenda
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className=" justify-content-md-center">
            <h5 className="p-4 font-weight-normal ">
              Day 1 of the virtual event will give participants an introduction to the concepts, approaches, and tools developed by the Natural Capital Project to enhance understanding of ecosystem services.
In days 2-4, Hackathon teams will install ecosystem services models on their computers and complete exercises using model input data provided by the instructors. Each day will have an assigned exercise and accompanying quiz. Find links to the input data, exercise, and quiz in the daily schedule for that day.
<br /> <br /> NEED TO PUT THE FULL AGENDA HERE !!!
              <br />    
            </h5>
          </Row>

          {/* How to use the viewer */}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              How to Use this Viewer
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className=" justify-content-md-center">
            <h5 className="p-4 font-weight-normal ">
              Select map layers using the left menu. See more info by
              clicking the <InfoCircle /> Icon. <br />
              <br />
              
            </h5>
          </Row>
          {/* example of 2 columns*/}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              Contacts
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className=" justify-content-md-center">
            <Col md={6} className="p-0">
              <h5 className="p-4 font-weight-normal ">
                If you have trouble with software or exercises, contact your instructors for this training: <a href="mailto: chweil@stanford.edu">Charlotte Weil</a>,<a href="mailto: gkowal@stanford.edu">Ginger Kowal</a>, <a href="mailto: jademd@stanford.edu">Jade Delevaux</a>.
              </h5>
            </Col>
            <Col md={6} className="p-0">
              <h5 className="p-4 font-weight-normal ">
                If you have trouble accessing training materials, contact <a href="mailto: lavila@stanford.edu">Lori Avila</a>.
              </h5>
            </Col>
          </Row>
          {/* Contributors*/}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">Contributors</h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 justify-content-md-center">
            {makeContributors(contributors)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;

const makeContributors = (contributors) => {
  return contributors.map((item) => {
    return (
      <Contributor
        contributor={item}
        noImg={noProfileImg}
        key={item.name}
      ></Contributor>
    );
  });
};
