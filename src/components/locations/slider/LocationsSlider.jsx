import React  from "react";
import Slider from "react-slick";
import { Button, Image } from "@chakra-ui/react";
import arrowLeft from "@app/assets/icons/arrow-left.svg";
import arrowRight from "@app/assets/icons/arrow-right.svg";
import Location1 from "@app/components/locations/slider/Location1";
import Location2 from "@app/components/locations/slider/Location2";
import Location3 from "@app/components/locations/slider/Location3";
import Location4 from "@app/components/locations/slider/Location4";
import Location5 from "@app/components/locations/slider/Location5";
import Location6 from "@app/components/locations/slider/Location6";
import Location7 from "@app/components/locations/slider/Location7";
import Location8 from "@app/components/locations/slider/Location8";
import Location9 from "@app/components/locations/slider/Location9";
import Location10 from "@app/components/locations/slider/Location10";
import Location11 from "@app/components/locations/slider/Location11";
import Location12 from "@app/components/locations/slider/Location12";
import Location13 from "@app/components/locations/slider/Location13";
import Location14 from "@app/components/locations/slider/Location14";
import Location15 from "@app/components/locations/slider/Location15";
import Location16 from "@app/components/locations/slider/Location16";

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
          <Location4 />
        </div>
        <div>
          <Location5 />
        </div>
        <div>
          <Location6 />
        </div>
        <div>
          <Location7 />
        </div>
        <div>
          <Location8 />
        </div>
        <div>
          <Location9 />
        </div>
        <div>
          <Location10 />
        </div>
        {/*<div>*/}
        {/*  <Location11 />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Location12 />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Location13 />*/}
        {/*</div>*/}
        <div>
          <Location14 />
        </div>
        <div>
          <Location15 />
        </div>
        {/*<div>*/}
        {/*  <Location16 />*/}
        {/*</div>*/}
      </Slider>
    </div>
  );
};

export default LocationsSlider;
