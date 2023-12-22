import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

const Gallery = (props) => {
  return (
    <Container id={props.id} className="mb-5">
      <h3 className="text-white">{props.title}</h3>
      <Carousel id="carouselExample" className="slide" indicators={false}>
        <Carousel.Item>
          <Row className="gx-1">
            {props.movieList && props.movieList.length > 0 && (
              <>
                <Col xs={4} md={3} xl={2}>
                  <img src={props.movieList[0].Poster} className="img-fluid" alt="Media0" />
                </Col>
                <Col xs={4} md={3} xl={2}>
                  <img src={props.movieList[1].Poster} className="img-fluid" alt="Media1" />
                </Col>
                <Col xs={4} md={3} xl={2}>
                  <img src={props.movieList[2].Poster} className="img-fluid" alt="Media2" />
                </Col>
                <Col className="d-none d-md-block" md={3} xl={2}>
                  <img src={props.movieList[3].Poster} className="img-fluid" alt="Media3" />
                </Col>
                <Col className="d-none d-xl-block" xl={2}>
                  <img src={props.movieList[4].Poster} className="img-fluid" alt="Media4" />
                </Col>
                <Col className="d-none d-xl-block" xl={2}>
                  <img src={props.movieList[5].Poster} className="img-fluid" alt="Media5" />
                </Col>
              </>
            )}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="gx-1">
            {props.movieList && props.movieList.length > 0 && (
              <>
                <Col xs={4} md={3} xl={2}>
                  <img src={props.movieList[6].Poster} className="img-fluid" alt="Media6" />
                </Col>
                <Col xs={4} md={3} xl={2}>
                  <img src={props.movieList[7].Poster} className="img-fluid" alt="Media7" />
                </Col>
                <Col xs={4} md={3} xl={2}>
                  <img src={props.movieList[8].Poster} className="img-fluid" alt="Media7" />
                </Col>
                <Col className="d-none d-md-block" md={3} xl={2}>
                  <img src={props.movieList[9].Poster} className="img-fluid" alt="Media9" />
                </Col>
                <Col className="d-none d-xl-block" xl={2}>
                  <img src={props.movieList[0].Poster} className="img-fluid" alt="Media0" />
                </Col>
                <Col className="d-none d-xl-block" xl={2}>
                  <img src={props.movieList[1].Poster} className="img-fluid" alt="Media1" />
                </Col>
              </>
            )}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Gallery;
