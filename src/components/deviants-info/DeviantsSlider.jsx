import NFT1 from "@app/assets/images/nfts/1.png";
import NFT2 from "@app/assets/images/nfts/2.png";
import NFT3 from "@app/assets/images/nfts/3.png";
import NFT4 from "@app/assets/images/nfts/4.png";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import classes from "@app/components/nft-sections/PolymorphSection.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DeviantsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes['slider--container']}>
      <div className={classes['shadow--left']} />
      <Slider {...settings}>
        <div className={``}>
          <Image src={NFT1} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT2} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT3} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT4} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT1} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT2} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT3} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT4} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT1} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT2} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT3} alt="" />
        </div>

        <div className={``}>
          {" "}
          <Image src={NFT4} alt="" />
        </div>
      </Slider>
      <div className={classes['shadow--right']} />
    </div>
  );
};

export default DeviantsSlider;
