import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InfoCircle } from "react-bootstrap-icons";
import ReactPlayer from "react-player";

import Contributor from "../components/Contributor";

//Import all images you want to use
const headerImg = require("../static/images/headerImg.png");
const noProfileImg = require("../static/images/no-profile-img.png");

// Add all contributors to this array
let contributors = [
  {
    name: "Ginger Kowal",
    jobTitle: "Gobi Training Lead, GIS Programmer Analyst, NatCap, Stanford University",
    img: require("../static/images/ginger_kowal.jpg"),
  },
  {
    name: "Charlotte Weil",
    jobTitle: "Data scientist, NatCap, Stanford University",
    img: require("../static/images/cw.png"), // if none provided the noProfileImg will be used
  },
  {
    name: "Lori Avila",
    jobTitle: "Training Coordinator, NatCap, Stanford",
    img: require("../static/images/lori-avila.jpg"),
  },
  {
    name: "Otgonsuren Avirmed",
    jobTitle: "Mongolia Program Office, Wildlife Conservation Society (WCS)",
    img: require("../static/images/oggie.jpg"),
  },
  {
    name: "Jade Delevaux",
    jobTitle: "Life Science Researcher, NatCap, Stanford University",
    img: require("../static/images/jade.png"),
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
        }}>
        <Row className="p-4 justify-content-md-center">
          <h2 className="text-center text-white font-weight-light display-3">
            Bringing Natural Capital Knowledge to Mongolia’s Gobi Steppe
          </h2>
        </Row>
        <hr className="hr-about" />
        <Row className="p-1 justify-content-md-center">
          <h2 className="text-center text-white font-weight-light">
            This four-day virtual event will introduce participants to the Natural Capital
            Approach and give teams of participants hands-on experience with three
            ecosystem services models.
          </h2>
        </Row>
      </Col>

      <Row className="justify-content-center p-4">
        <Col md={7}>
          {" "}
          {/* change the size of the main container*/}
          {/* Here you can include the sections you want in your about page*/}
          {/* Project information*/}
          {/* Agenda */}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">Agenda & Resources </h2>
          </Row>
          <hr className="hr-about" />
          <Row className=" justify-content-md-center">
            <h5 className="p-4 font-weight-light ">
              Day 1 of the virtual event will give participants an introduction to the
              concepts, approaches, and tools developed by the Natural Capital Project to
              enhance understanding of ecosystem services. <br />
              In days 2-4, Hackathon teams will install ecosystem services models on their
              computers and complete exercises using model input data provided by the
              instructors. Each day will have an assigned exercise and accompanying quiz.
              Find links to the input data, exercise, and quiz in the daily schedule for
              that day.
            </h5>
          </Row>
          <Row className="p-4 ">
            <h4
              className=" p-0 font-weight-normal"
              style={{ color: "var(--highlight-color)" }}>
              MONDAY, SEPTEMBER 14, 2020
            </h4>
            <br />
            <br />
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                8 am – 10 am: Welcome and Orientation (Ginger Kowal)
              </h5>
              <h5 className=" p-0 font-weight-light">
                All participants log on to Zoom for a virtual welcome and orientation to
                the workshop. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95721627095?pwd=M0dwVjJmR1I1bjlQc3FjRUNnYWZSUT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                11 am – 1 pm: Office Hours (Jade Delevaux)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom to ask questions and get help from instructor Jade
                Delevaux. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/98380723673?pwd=UkFKcVhoelIxVUZZK0ZzU2JMM0hDQT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                3 pm – 5 pm: Discussion of the Natural Capital Approach and Preparation
                for Hackathon (Charlotte Weil)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom for a virtual discussion and preparation for the Hackathon
                portion of the workshop. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95998315863?pwd=SzBiU2JldjFidkg5SkhiczBGZVA3UT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>

            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal font-italic">
                Self-paced: The Natural Capital Approach
              </h5>
              <h5 className=" p-0 font-weight-light">
                All participants watch the following training videos to learn about the
                Natural Capital Approach and hear about case study applications of the
                approach by Natural Capital Project scientists.
              </h5>
              <ul>
                <li>
                  <a
                    href="https://youtu.be/iV9QBsCSxE4"
                    target="_blank"
                    rel="noopener noreferrer">
                    Introduction to the Natural Capital Project
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/ZVR4H8adgJA"
                    target="_blank"
                    rel="noopener noreferrer">
                    The Power of the Natural Capital Network and Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/3cvzcR6t2tk"
                    target="_blank"
                    rel="noopener noreferrer">
                    The Sustainable Cashmere Project
                  </a>{" "}
                  (partnership with Natural Capital Project and WCS)
                </li>
                <li>
                  <a
                    href="https://youtu.be/JM2UoOszsOk"
                    target="_blank"
                    rel="noopener noreferrer">
                    Webinar: Introduction to the InVEST Model Suite
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/MKUTwjVN86c"
                    target="_blank"
                    rel="noopener noreferrer">
                    Case Study: Sustainable Development Planning for the Bahamas
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/2u3mdlL-KhU"
                    target="_blank"
                    rel="noopener noreferrer">
                    Case Study: Resilience and Land Use Planning for Water in the Amazon
                  </a>
                </li>
              </ul>
              <h5 className=" p-0 font-weight-light">
                The following additional videos are suggested for participants who want to
                learn more about ongoing Natural Capital Project work in parts of the
                world that are different from Mongolia.
              </h5>
              <ul>
                <li>
                  <a
                    href="https://youtu.be/6tjuQPjpWUs"
                    target="_blank"
                    rel="noopener noreferrer">
                    Global Modeling of Ecosystem Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/1OnOgGpEgGo"
                    target="_blank"
                    rel="noopener noreferrer">
                    Webinar: Freshwater Quality Models
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Webinar: Urban Ecosystem Services Models !!MISSING LINK!!
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal font-italic">
                Self-paced: Preparation for Hackathon
              </h5>
              <h5 className=" p-0 font-weight-light">
                Teams participating in the Hackathon should install the InVEST model suite
                on their computers. Follow the instructions here to install InVEST:{" "}
                <a
                  href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/getting_started.html"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
              </h5>
            </Row>
          </Row>
          <Row className="p-4 ">
            <h4
              className=" p-0 font-weight-normal"
              style={{ color: "var(--highlight-color)" }}>
              TUESDAY, SEPTEMBER 15, 2020
            </h4>
            <br />
            <br />
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">Tasks</h5>

              <ul>
                <li>Install the InVEST model suite</li>
                <li>Complete the Habitat Quality Model exercise</li>
                <li>Submit answers to the Habitat Quality Model quiz</li>
              </ul>
            </Row>
            <Row>
              <h5 className=" font-weight-normal">Resources</h5>
              <ul>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Video: Introduction to the Habitat Quality Model !!MISSING LINK!!
                  </a>
                </li>
                <li>
                  <a
                    href="https://naturalcapitalproject.stanford.edu/software/invest"
                    target="_blank"
                    rel="noopener noreferrer">
                    Download the InVEST installer
                  </a>
                </li>
                <li>
                  <a
                    href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/getting_started.html"
                    target="_blank"
                    rel="noopener noreferrer">
                    Instructions for installing InVEST
                  </a>
                </li>
                <li>
                  <a
                    href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/habitat_quality.html?highlight=habitat quality"
                    target="_blank"
                    rel="noopener noreferrer">
                    Users’ Guide: Habitat Quality Model
                  </a>
                </li>
                <li>
                  <a
                    href="https://stanford.box.com/s/9ylqg5cys7oev8xsc9ao3odufqo39uyi"
                    target="_blank"
                    rel="noopener noreferrer">
                    Input data: Habitat Quality Model
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Exercise: Habitat Quality Model !!MISSING LINK!!
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Quiz: Habitat Quality Model !!MISSING LINK!!
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                8 am – 10 am: Daily orientation and office hours (Ginger Kowal)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom for an introduction to the day’s activities. Ask questions
                and get help from instructor Ginger Kowal.
                <br /> Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95721627095?pwd=M0dwVjJmR1I1bjlQc3FjRUNnYWZSUT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                11 am – 1 pm: Office Hours (Jade Delevaux)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom to ask questions and get help from instructor Jade
                Delevaux. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/98380723673?pwd=UkFKcVhoelIxVUZZK0ZzU2JMM0hDQT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                3 pm – 5 pm: Office Hours (Charlotte Weil)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom to ask questions and get help from instructor Charlotte
                Weil. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95998315863?pwd=SzBiU2JldjFidkg5SkhiczBGZVA3UT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
          </Row>
          <Row className="p-4 ">
            <h4
              className=" p-0 font-weight-normal"
              style={{ color: "var(--highlight-color)" }}>
              WEDNESDAY, SEPTEMBER 16, 2020
            </h4>
            <br />
            <br />
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">Tasks</h5>

              <ul>
                <li>Install the Rangeland Production Model</li>
                <li>Complete the Rangeland Production Model exercise</li>
                <li>Submit answers to the Rangeland Production Model quiz</li>
              </ul>
            </Row>
            <Row>
              <h5 className=" font-weight-normal">Resources</h5>
              <ul>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Video: Introduction to the Rangeland Production Model !!MISSING LINK!!
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Quick Start Guide: Rangeland Production Model !!MISSING LINK!!
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Full documentation: Rangeland Production Model !!MISSING LINK!!
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/natcap/rangeland_production/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer">
                    Download the Rangeland Production Model installer
                  </a>
                </li>
                <li>
                  <a
                    href="https://stanford.box.com/s/4xq4p7s4cbii71pxoobdyy0yxh3s1ogd"
                    target="_blank"
                    rel="noopener noreferrer">
                    Input data: Rangeland Production Model
                  </a>
                </li>
                <li>
                  <a
                    href="https://stanford.box.com/s/6v9ynrkwstemxqz91aipc86ry9yqlgpw"
                    target="_blank"
                    rel="noopener noreferrer">
                    Exercise: Rangeland Production Model
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdgWXG74ME6uaJIh3zDTHSF7Tw4ukCFpYfJd6OvipCZuIN65w/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer">
                    Quiz: Rangeland Production Model
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                8 am – 10 am: Daily orientation and office hours (Ginger Kowal)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom for an introduction to the day’s activities. Ask questions
                and get help from instructor Ginger Kowal. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95721627095?pwd=M0dwVjJmR1I1bjlQc3FjRUNnYWZSUT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                11 am – 1 pm: Office Hours (Jade Delevaux)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom to ask questions and get help from instructor Jade
                Delevaux.
                <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/98380723673?pwd=UkFKcVhoelIxVUZZK0ZzU2JMM0hDQT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>

            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                3 pm – 5 pm: Office Hours (Charlotte Weil)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom to ask questions and get help from instructor Charlotte
                Weil. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95998315863?pwd=SzBiU2JldjFidkg5SkhiczBGZVA3UT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
          </Row>
          <Row className="p-4 ">
            <h4
              className=" p-0 font-weight-normal"
              style={{ color: "var(--highlight-color)" }}>
              THURSDAY, SEPTEMBER 17, 2020
            </h4>
            <br />
            <br />
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">Tasks</h5>
              <ul>
                <li>Run the InVEST Carbon Model</li>
                <li>Complete the Carbon Model exercise</li>
                <li>Submit answers to the Carbon Model quiz</li>
                <li>
                  Synthesize results from Habitat Quality, Rangeland Condition, and Carbon
                  Models
                </li>
              </ul>
            </Row>
            <Row>
              <h5 className=" font-weight-normal">Resources</h5>
              <ul>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Video: Introduction to the Carbon Model !!MISSING LINK!!
                  </a>
                </li>
                <li>
                  <a
                    href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/carbonstorage.html?highlight=carbon"
                    target="_blank"
                    rel="noopener noreferrer">
                    Users’ Guide: Carbon Model
                  </a>
                </li>
                <li>
                  <a href="">Input data: Carbon Model</a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Exercise: Carbon Model !!MISSING LINK!!
                  </a>
                </li>
                <li>
                  <a
                    href="https://forms.gle/EMs2p5Km58FSM19V8"
                    target="_blank"
                    rel="noopener noreferrer">
                    Quiz: Carbon Model
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                8 am – 10 am: Daily orientation and office hours (Ginger Kowal)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom for an introduction to the day’s activities. Ask questions
                and get help from instructor Ginger Kowal. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95721627095?pwd=M0dwVjJmR1I1bjlQc3FjRUNnYWZSUT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                11 am – 1 pm: Office Hours (Jade Delevaux)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom to ask questions and get help from instructor Jade
                Delevaux. <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/98380723673?pwd=UkFKcVhoelIxVUZZK0ZzU2JMM0hDQT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-normal">
                3 pm – 5 pm: Closing Discussion (Charlotte Weil)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom for closing discussion led by instructor Charlotte Weil.
                <br />
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/95998315863?pwd=SzBiU2JldjFidkg5SkhiczBGZVA3UT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
            </Row>
          </Row>
          {/* How to use the viewer */}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">How to Use this Viewer</h2>
          </Row>
          <hr className="hr-about" />
          <Row className=" justify-content-md-center">
            <h5 className="p-4 font-weight-light ">
              Select map layers using the left menu. See more info by clicking the{" "}
              <InfoCircle /> Icon. <br />
              <br />
            </h5>
          </Row>
          {/* example of 2 columns*/}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">Contacts</h2>
          </Row>
          <hr className="hr-about" />
          <Row className=" justify-content-md-center">
            <Col md={6} className="p-0">
              <h5 className="p-4 font-weight-light ">
                If you have trouble with software or exercises, contact your instructors
                for this training:{" "}
                <a href="mailto: chweil@stanford.edu">Charlotte Weil</a>,{" "}
                <a href="mailto: gkowal@stanford.edu">Ginger Kowal</a>,{" "}
                <a href="mailto: jademd@stanford.edu">Jade Delevaux</a>.
              </h5>
            </Col>
            <Col md={6} className="p-0">
              <h5 className="p-4 font-weight-light ">
                If you have trouble accessing training materials, contact{" "}
                <a href="mailto: lavila@stanford.edu">Lori Avila</a>.
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
          <Row className=" justify-content-md-center">
            <ReactPlayer url="https://youtu.be/iV9QBsCSxE4" controls={true} />
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
      <Contributor contributor={item} noImg={noProfileImg} key={item.name}></Contributor>
    );
  });
};
