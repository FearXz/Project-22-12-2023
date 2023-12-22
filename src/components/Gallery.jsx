import React, { useEffect } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Poster from "./Poster";

const Gallery = (props) => {
  useEffect(() => {
    const innerCarousel = document.querySelectorAll(".carousel-inner");
    if (innerCarousel) {
      innerCarousel.forEach((carousel) => {
        carousel.classList.add("overflow-visible");
      });
    }
    let buttons = document.querySelectorAll(".carousel a[role=button]");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let inner = event.currentTarget.closest(".carousel").querySelector(".carousel-inner");
        inner.classList.add("overflow-hidden");
        inner.classList.remove("overflow-visible");
        setTimeout(function () {
          inner.classList.add("overflow-visible");
          inner.classList.remove("overflow-hidden");
        }, 650);
      });
    });
  }, []);

  return (
    <Container id={props.id} className="mb-5">
      <h3 className="text-white">{props.title}</h3>
      <Carousel id="carouselExample" className="slide" indicators={false} interval={null}>
        <Carousel.Item>
          <Row className="gx-1">
            {props.movieList && props.movieList.length > 0 && (
              <>
                {props.movieList.slice(0, 6).map((movie, index) => (
                  <Poster key={props.id + index} poster={movie.Poster} />
                ))}
              </>
            )}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="gx-1">
            {props.movieList && props.movieList.length > 0 && (
              <>
                {props.movieList.slice(3, 9).map((movie, index) => (
                  <Poster key={props.id + index} poster={movie.Poster} />
                ))}
              </>
            )}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Gallery;
