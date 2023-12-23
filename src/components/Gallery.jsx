import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Poster from "./Poster";

const Gallery = (props) => {
  const [movieGroups, setMovieGroups] = useState([]);

  useEffect(() => {
    const dividedMovies = [];
    for (let i = 0; i < props.movieList.length; i += 6) {
      dividedMovies.push(props.movieList.slice(i, i + 6));
    }
    setMovieGroups(dividedMovies);
  }, [props.movieList]);

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
        {movieGroups.map((movieGroup, groupIndex) => (
          <Carousel.Item key={"carouselItem-" + groupIndex}>
            <Row className="gx-1">
              {movieGroup.map((movie, index) => (
                <Poster
                  key={"poster-" + groupIndex * 6 + index}
                  responsive={
                    index < 3
                      ? "col-4 col-md-3 col-xl-2"
                      : index === 3
                      ? "d-none d-md-block col-md-3 col-xl-2"
                      : "d-none d-xl-block col-xl-2"
                  }
                  poster={movie.Poster}
                />
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Gallery;
