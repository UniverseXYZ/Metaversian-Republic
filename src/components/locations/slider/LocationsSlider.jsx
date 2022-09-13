import React  from "react";
import Slider from "react-slick";
import { Button, Image } from "@chakra-ui/react";
import arrowLeft from "@app/assets/icons/arrow-left.svg";
import arrowRight from "@app/assets/icons/arrow-right.svg";
import Location1 from "@app/components/locations/slider/Location1";
import Location2 from "@app/components/locations/slider/Location2";
import Location3 from "@app/components/locations/slider/Location3";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Button onClick={onClick} className={"arrow arrow--prev"}>
      <Image src={arrowLeft} alt="Arrow" />
    </Button>
  )
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Button onClick={onClick} className={"arrow arrow--next"}>
      <Image src={arrowRight} alt="Arrow" />
    </Button>
  )
}

const LocationsSlider = () => {
  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div>
      <Slider {...settings} className={"custom-slider"}>
        <div>
          <Location1 />
        </div>
        <div>
          <Location2 />
        </div>
        <div>
          <Location3 />
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default LocationsSlider;
