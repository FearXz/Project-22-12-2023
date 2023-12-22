import React from "react";
import { Col } from "react-bootstrap";
function Poster(props) {
  return (
    <Col xs={4} md={3} xl={2}>
      <img src={props.poster} className="img-fluid" alt="Media0" />
    </Col>
  );
}
export default Poster;
