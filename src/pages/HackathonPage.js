import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HackathonPage(props) {
  return (
    <Container fluid={true} className="p-0 m-0 bg-black color-white">
      {/* About header */}
      <Col className="p-5 m-0">
        <Row className="p-0 justify-content-md-center">
          <h2 className="text-center text-white font-weight-light display-3">
            Hackathon
          </h2>
        </Row>
        <hr className="hr-about" />
      </Col>
      <Row className="justify-content-center p-4">
        <Col md={7}>
          <Row className="p-3 ">
            <h4 className=" text-white font-weight-light p-3 ">
              Participants of this training have the opportunity to participate in
              Hackathon Challenges! In addition to the expectation that all team will run
              the 3 models presented (Carbon, Habitat quality, Rangeland production) and
              synthetize their results into a combined ecosystem services assessment to
              present on the last day, teams can choose to tackle a specific challenge.
            </h4>
            <h5 className=" text-white font-weight-light p-3 font-italic">
              Challenges submissions need to be compiled in a compressed folder named
              team_number_Challenge_chosen (e.g “team4_challengeB.zip”), uploaded to this
              Box folder by Thursday Sept 17th, 10PM UB Time. Decisions on winners will be
              announced by the end of that week.
            </h5>
          </Row>

          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              Challenge A “Trade-Offs focus”
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 ">
            <h5 className=" text-white font-weight-light p-3 ">
              Drawing on the results of the carbon, habitat quality, and rangeland
              production models generated during the workshop, combine results from all
              three services and highlight the trade-offs. For example, explore which
              area, infrastructure interventions are beneficial to one service, at the
              expense of another?
            </h5>
          </Row>

          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              Challenge B “The best display””
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 ">
            <h5 className=" text-white font-weight-light p-3 ">
              Communication and visualization of results is critical to convey effectively
              ecosystem services assessments. Make the most intuitive integrated map of
              services for the study area. This task would be evaluated subjectively with
              regard to the effectiveness of visual synthesis of the three modeled
              services.
            </h5>
          </Row>

          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">Challenge C “Carbon”</h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 ">
            <h5 className=" text-white font-weight-light p-3 ">
              Improve the biophysical table for carbon. This task would be evaluated with
              regard to documentation of sources for biophysical table values and
              quantification of changes in the results.
            </h5>
          </Row>

          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              Challenge D “Rangeland Production”
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 ">
            <h5 className=" text-white font-weight-light p-3 ">
              Conduct scenario analysis with the Rangeland Production Model to analyze the
              impact of changing animal numbers on rangeland condition: what is the impact
              on rangeland condition of doubling total animal numbers? Reducing animal
              numbers by half? What other plausible scenarios of livestock management
              change could be analyzed with the model?
            </h5>
          </Row>

          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              Challenge E “Habitat Quality”
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 ">
            <h5 className=" text-white font-weight-light p-3 ">
              Re-parameterize the habitat quality model, either to apply to a particular
              species group, or to reflect other impact weights. Compare results and
              discuss. Additional threats could also be included if the team has access to
              additional threats data.
            </h5>
          </Row>

          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              Challenge F “Robustness of results”
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 ">
            <h5 className=" text-white font-weight-light p-3 ">
              Conduct a sensitivity analysis of any of the models. What is the impact on
              the results of changing a few key parameters or inputs?
            </h5>
          </Row>

          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">Prizes</h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 ">
            <h5 className=" text-white font-weight-light p-3 ">
              For each challenge, the most successful team will be chosen, and rewarded
              with the opportunity to feature their work on the Gobi Training Viewer, and
              potentially even in the Natural Capital Project newsletter and website.
              Teams that produce outstanding presentation of model results will be invited
              to contribute maps and model results to WCS’s report.
            </h5>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HackathonPage;