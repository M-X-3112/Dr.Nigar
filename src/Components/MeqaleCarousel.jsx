import Carousel from "react-bootstrap/Carousel";
import Meqale1 from "./Meqale1";
import Meqale2 from "./Meqale2";
import Meqale3 from "./Meqale3";
import Meqale4 from "./Meqale4";

function MeqaleCarousel() {
  return (
    <Carousel>
          <Carousel.Item interval={4000}>
            <Meqale1 />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Meqale2 />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Meqale3 />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Meqale4 />
          </Carousel.Item>
    </Carousel>
  );
}

export default MeqaleCarousel;
