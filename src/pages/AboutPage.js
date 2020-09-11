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
    name: "Jade Delevaux",
    jobTitle: "Life Science Researcher, NatCap, Stanford University",
    img: require("../static/images/jade.png"),
  },
  {
    name: "Otgonsuren Avirmed",
    jobTitle: "Mongolia Program Office, Wildlife Conservation Society (WCS)",
    img: require("../static/images/oggie.jpg"),
  },
  {
    name: "Lori Avila",
    jobTitle: "Training Coordinator, NatCap, Stanford",
    img: require("../static/images/lori-avila.jpg"),
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


    {/*Section 1*/}

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
              All times given in Ulaanbaatar local time.
            </h5>
            <h5 className="p-4 font-weight-light ">
              Day 1 of the virtual event will give participants an introduction to the
              concepts, approaches, and tools developed by the Natural Capital Project to
              enhance understanding of ecosystem services. <br />
              In days 2-4, Hackathon teams will install ecosystem services models on their
              computers and complete exercises using model input data provided by the
              instructors. Each day will have an assigned exercise and accompanying quiz.
              Find links to the input data, exercise, and quiz in the daily schedule for
              that day, and answers to <a href="https://stanford.app.box.com/s/n8t2fh97ikhb02e60rze3pc03hkr9w8s">Frequently Asked Questions</a>.
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
              <h5 className=" p-0 font-weight-bold">
                9 am – 12 pm: The Natural Capital Approach
              </h5>
              <h5 className=" p-0 font-weight-light">
                Join the Zoom meeting:{" "}
                <a
                  href="https://stanford.zoom.us/j/91956941487?pwd=MHJYTUozM1BRZEtKdm5SWXJDYWdRQT09"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  click here
                </a>
                . Password: 007895
              </h5>
              <h5 className=" p-0 font-weight-light font-italic">
                All participants log on to Zoom for a virtual welcome and orientation to the workshop.
Otgonsuren Avirmed (Conservation Science Program Manager, WCS) will lead all participants in self-paced viewing of training videos. Videos explain the Natural Capital Approach and case study applications of the approach by Natural Capital Project scientists. <br />
              </h5>
            </Row>
                        <Row className="p-1 m-0">
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
              <h5 className=" p-0 font-weight-light font-italic">
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
                  <a href="https://youtu.be/bur8aTUkNWQ" target="_blank" rel="noopener noreferrer">
                    Webinar: Urban Ecosystem Services Models
                  </a>
                </li>
              </ul>
            </Row>

            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-bold">
                1 pm – 2 pm: Office Hours (Jade Delevaux)
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
              <h5 className=" p-0 font-weight-bold">
                Self-paced: Preparation for Hackathon
              </h5>
              <h5 className=" p-0 font-weight-light font-italic">
                Teams participating in the Hackathon should install the InVEST model suite
                on their computers. </h5>
                <ul>
                <li>
                Follow the {" "}
                <a
                  href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/getting_started.html"
                  target="_blank"
                  rel="noopener noreferrer">
                  {" "}
                  instructions to install InVEST
                </a></li>
                <li> Review guidelines for <a href='http://viz.naturalcapitalproject.stanford.edu/gobiTraining/#/hackathon'>Hackathon challenges</a></li></ul>
            </Row>


            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-bold">
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
       </Row>





          <Row className="p-4 ">
            <h4
              className=" p-0 font-weight-normal"
              style={{ color: "var(--highlight-color)" }}>
              TUESDAY, SEPTEMBER 15, 2020
            </h4>
            <br />
            <br />
            <Row className=" justify-content-md-center">
              <ReactPlayer url="https://youtu.be/jQHs9BHvlCA" controls={true} />
            </Row>
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
                <li>Introduction to the Habitat Quality Model {" "}
                  <a href="https://youtu.be/jQHs9BHvlCA" target="_blank" rel="noopener noreferrer">
                    Video
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
                <li>Habitat Quality Model {" "}
                  <a
                    href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/habitat_quality.html?highlight=habitat quality"
                    target="_blank"
                    rel="noopener noreferrer">
                    Users’ Guide
                  </a>
                </li>
                <li>Habitat Quality Model Input Data: {" "}
                  <a
                    href="https://stanford.box.com/s/9ylqg5cys7oev8xsc9ao3odufqo39uyi"
                    target="_blank"
                    rel="noopener noreferrer">
                    direct download
                  </a>
                  or {" "}
                  <a
                    href="http://viz.naturalcapitalproject.stanford.edu/gobiTraining/"
                    target="_blank"
                    rel="noopener noreferrer">
                    view/download online
                  </a>.
                </li>
                <li>Habitat Quality Model {" "}
                  <a
                    href="https://stanford.box.com/s/zebjh6mh7i2dott09m942j6zw9rk90yz"
                    target="_blank"
                    rel="noopener noreferrer">
                    Exercise
                  </a>
                </li>
                <li>Habitat Quality Model {" "}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScvpsGul-zsEnB-MzUpMXVnhlf7as7amvZjpJI54Jshqg-PUw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                    Quiz
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-bols">
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
              <h5 className=" p-0 font-weight-bold">
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
              <h5 className=" p-0 font-weight-bold">
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
            <Row className=" justify-content-md-center">
              <ReactPlayer url="https://youtu.be/IEZC3NaUXGA" controls={true} />
            </Row>
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
                <li>: Introduction to the Rangeland Production Model {" "}
                  <a href="https://youtu.be/IEZC3NaUXGA" target="_blank" rel="noopener noreferrer">
                    Video
                  </a>
                </li>
                <li>Rangeland Production Model {" "}
                  <a href="https://stanford.box.com/s/4d8vod5flmcpledz39p2na4aco62bb6r" target="_blank" rel="noopener noreferrer">
                    Quick Start Guide
                  </a>
                </li>
                <li>Rangeland Production Model {" "}
                  <a href="https://github.com/natcap/rangeland_production/releases/download/0.1.6/Documentation_RPM_0.1.6.pdf" target="_blank" rel="noopener noreferrer">
                    Full documentation
                  </a>
                </li>
                <li>Rangeland Production Model {" "}
                  <a
                    href="https://github.com/natcap/rangeland_production/releases/download/0.1.6/Rangeland_Production_0.1.6_x86_Setup.exe"
                    target="_blank"
                    rel="noopener noreferrer">
                    Download the RPM installer
                  </a>
                </li>
                <li>Rangeland Production Model {" "}
                  <a
                    href="https://stanford.box.com/s/4xq4p7s4cbii71pxoobdyy0yxh3s1ogd"
                    target="_blank"
                    rel="noopener noreferrer">
                    Input data
                  </a>
                </li>
                <li>Rangeland Production Model {" "}
                  <a
                    href="https://stanford.box.com/s/6v9ynrkwstemxqz91aipc86ry9yqlgpw"
                    target="_blank"
                    rel="noopener noreferrer">
                    Exercise
                  </a>
                </li>
                <li>Rangeland Production Model {" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdgWXG74ME6uaJIh3zDTHSF7Tw4ukCFpYfJd6OvipCZuIN65w/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer">
                    Quiz
                  </a>
                </li>
                <li>Rangeland Production Model {" "}
                  <a
                    href="http://viz.naturalcapitalproject.stanford.edu/gobiTraining/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Interactive data viewer
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-bold">
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
              <h5 className=" p-0 font-weight-bold">
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
              <h5 className=" p-0 font-weight-bold">
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
            <Row className=" justify-content-md-center">
              <ReactPlayer url="https://youtu.be/DlegxD_ma5I" controls={true} />
            </Row>
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
                <li className=" p-0 font-weight-bold">Prepare a 3-minute final presentation for your team, showcasing your results from this week (by 2pm).
                </li>
                <li className=" p-0 font-weight-bold">Submit a hackathon challenge submission (due 10pm).
                </li>
                </ul>

            </Row>
            <Row>
              <h5 className=" font-weight-normal">Resources</h5>
              <ul>
                <li> Introduction to the Carbon Model {" "}
                  <a href="https://youtu.be/DlegxD_ma5I" target="_blank" rel="noopener noreferrer">
                    Video
                  </a>
                </li>
                <li> Carbon Model {" "}
                  <a
                    href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/carbonstorage.html?highlight=carbon"
                    target="_blank"
                    rel="noopener noreferrer">
                    Users’ Guide
                  </a>
                </li>
                <li> Carbon Model Input data {" "}
                  <a
                    href="https://stanford.box.com/s/ekk582yua68ntkc3vzrn3ugij992mckw"
                    target="_blank"
                    rel="noopener noreferrer">
                    direct download
                  </a>
                  or 
                  <a
                    href="http://viz.naturalcapitalproject.stanford.edu/gobiTraining/"
                    target="_blank"
                    rel="noopener noreferrer">
                    view online
                  </a>
                </li>
                <li> Carbon Model {" "}
                  <a
                    href="https://stanford.box.com/s/yq2gm4iyuca6atxikli0xriiexwesxxs"
                    target="_blank"
                    rel="noopener noreferrer">
                    Exercise
                  </a>
                </li>
                <li> Carbon Model {" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScDai8ZI4fXe3HnvvpKnStk3MZyg53i0CrYlgsUE8th6epEAg/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer">
                    Quiz
                  </a>
                </li>
              </ul>
            </Row>
            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-bold">
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
              <h5 className=" p-0 font-weight-bold">
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
              <h5 className=" p-0 font-weight-bold">
                By 2 pm: Final Presentation slides submissions
              </h5>
              <h5 className=" p-0 font-weight-light font-italic"> 
                  Please use Google Slides and send a link to your slides (5 slides maximum) to chweil@stanford.edu before 2 pm!
              </h5>
            </Row>

            <Row className="p-1 m-0">
              <h5 className=" p-0 font-weight-bold">
                3 pm – 5 pm: inal Presentations by Hackathon Teams & Closing Discussion (Charlotte Weil)
              </h5>
              <h5 className=" p-0 font-weight-light">
                Log on to Zoom for final presentations from each team and a closing discussion led by instructor Charlotte Weil.                <br />
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
              <h5 className=" p-0 font-weight-bold">
                By 10 pm: Hackathon challenges submissions
              </h5>
              <h5 className=" p-0 font-weight-light font-italic"> 
                  Teams participating in Hackathon Challenges must compile their submission in a compressed folder named “team_number_challenge_chosen.zip” (e.g., “team4_challengeB.zip”), and upload the compressed folder to {" "}
                  <a href="https://stanford.app.box.com/f/5914553b816447bfb312df1239f9f3d3" target="_blank">
                   this Box folder </a>
                  by 10 pm on Thursday, September 17. Challenge winners will be announced by the end of the week.
              </h5>
            </Row>

              <br /><br />
            <h5 className=" p-0 font-weight-bold">
             Please provide feedback to NatCap using {" "}
             <a href="https://forms.gle/GUJMNzmDGjoChB689" target="_blank">
                   this survey.</a> Thank you!
             
            </h5>

          </Row>
          {/* How to use the viewer 
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
          </Row>*/}
          {/* 2 columns*/}
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
          {/* Contributors
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">Contributors</h2>
          </Row>
          <hr className="hr-about" />*/}
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
      <Contributor contributor={item} noImg={noProfileImg} key={item.name}></Contributor>
    );
  });
};
