import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Download } from "react-bootstrap-icons";

function CSVCardInfo(props) {
  return (
    <Row className="dataSection m-1 dataset color-white">
      <Col sm={10} className=" p-0">
        <h5 className="font-weight-normal">
          {props.item.title}
          &nbsp;&nbsp;&nbsp;
          {props.item.link && props.showDownloadButton && (
            <a
              className=" color-white "
              href={require("../data/csv/" + props.item.link)}
              download={props.item.link}>
              <Download className="hover-highlight" />
            </a>
          )}
        </h5>
      </Col>
    </Row>
  );
}

export default CSVCardInfo;
