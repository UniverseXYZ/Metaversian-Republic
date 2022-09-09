import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import IntroBg1 from "../../assets/images/intro-bg-1.png";
import IntroBg2 from "../../assets/images/intro-bg-2.png";
import IntroBg3 from "../../assets/images/intro-bg-3.png";
import IntroBg4 from "../../assets/images/intro-bg-4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlayMethods extends Component {
  state = {
    slideIndex: 0,
    barLoading: 0,
    isMobile: false,
  };

  updateIsMobile = () => {
    if (typeof window !== "undefined") {
      this.setState({
        isMobile: window.innerWidth < 768 ? true : false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateIsMobile);
    this.updateIsMobile();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsMobile);
  }

  render() {
    const ArrowNav = () => {
      return null;
    };

    const fillCarouselIndicator = (index) => {
      // 1. Check if the selected bar is already in a loading state.
      // 2. If it is, do nothing.
      if (this.state.barLoading === index) {
        return;
      }

      // 3. If it is NOT, start increasing the SPAN's width to 100.
      if (typeof window !== "undefined" && this.state.barLoading !== index) {
        document.getElementsByClassName("active--carousel--span")[
          index
          ].style.width = "0%";

        let intervalID = 0;
        let i = 0;

        clearInterval(intervalID);
        this.setState({ barLoading: index });
        intervalID = setInterval(() => {
          try {
            i = i + 1;
            document.getElementsByClassName("active--carousel--span")[
              index
              ].style.width = i + "%";
            if (i >= 100) {
              i = 0;
              clearInterval(intervalID);
              document.getElementsByClassName("active--carousel--span")[
                index
                ].style.width = "0%";
              this.setState({ barLoading: false });
            }
          } catch {
            clearInterval(intervalID);
            this.setState({ barLoading: false });
          }
        }, 37);
      }
    };

    // const handleLoadingBarClick = (slideIndex) => {
    //   if (
    //     this.state.slideIndex === slideIndex ||
    //     this.state.barLoading == slideIndex
    //   ) {
    //     return;
    //   }
    //   this.setState({ slideIndex }, () => {
    //     this.slider.slickGoTo(this.state.slideIndex);
    //     fillCarouselIndicator(this.state.slideIndex);
    //   });
    // };

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3700,
      nextArrow: <ArrowNav />,
      prevArrow: <ArrowNav />,
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      speed: 700,
      fade: true,
      swipe: false,
      draggable: false,
      accessibility: false,
      // afterChange: () => {},
      beforeChange: (current, next) =>
        this.setState({ slideIndex: next }, () => {
          fillCarouselIndicator(this.state.slideIndex);
        }),
    };

    return (
      <div className="slider--container">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className={`background--image`}>
            <Image
              src={IntroBg1}
              objectFit={"cover"}
              objectPosition={"70%"}
              layout="fill"
              quality={90}
              alt={"charles"}
            />
          </div>

          <div className={`background--image`}>
            <Image
              src={IntroBg2}
              objectFit={"cover"}
              objectPosition={"60%"}
              layout="fill"
              quality={90}
              alt={"skeleton"}
            />
          </div>

          <div className={`background--image`}>
            <Image
              src={IntroBg3}
              objectFit={"cover"}
              objectPosition={"60%"}
              layout="fill"
              quality={90}
              alt={"goldtooth"}
            />
          </div>

          <div className={`background--image`}>
            <Image
              src={IntroBg4}
              objectFit={"cover"}
              objectPosition={"60%"}
              layout="fill"
              quality={90}
              alt={"skeleton"}
            />
          </div>
        </Slider>

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-label="Slide 1"
            className={
              this.state.slideIndex === 0 ? "active--carousel--bar" : null
            }
            aria-current="true"
            // onClick={this.state.barLoading === 0 ? null : () => handleLoadingBarClick(0)}
          >
            <span className={"active--carousel--span"} />
          </button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className={
              this.state.slideIndex === 1 ? "active--carousel--bar" : null
            }
            // onClick={this.state.barLoading === 1 ? null : () => handleLoadingBarClick(1)}
          >
            <span className={"active--carousel--span"} />
          </button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className={
              this.state.slideIndex === 2 ? "active--carousel--bar" : null
            }
            // onClick={this.state.barLoading === 2 ? null : () => handleLoadingBarClick(2)}
          >
            <span className={"active--carousel--span"} />
          </button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            className={
              this.state.slideIndex === 3 ? "active--carousel--bar" : null
            }
            // onClick={this.state.barLoading === 3 ? null : () => handleLoadingBarClick(3)}
          >
            <span className={"active--carousel--span"} />
          </button>
        </div>
      </div>
    );
  }
}
