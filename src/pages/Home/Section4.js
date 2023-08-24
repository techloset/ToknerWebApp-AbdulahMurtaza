import React from "react";
import one from "../../assets/img/ellipse-18-1.svg";
import two from "../../assets/img/ellipse-19-1.svg";
import three from "../../assets/img/ellipse-20-1.svg";
import Slider from "react-slick";

export default function Section4() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          className: "center",
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <>
      <section>
        <div className="h-[1020px] testingImage text-center sm:px-8">
          <h1 className="text-5xl font-bold text-white md:mt-24 mb-6 pt-[250px] md:pt-[320px]">
            Presale Details
          </h1>

          <Slider {...settings}>
            {/* card */}
            <div className="card bg-white rounded-3xl max-w-md text-center py-16">
              <img src={one} alt="one" className="h-24 mx-auto" />
              <h5 className="card-title mt-10">Phase One</h5>
              <div className="text-gray-900 text-center text-base not-italic font-bold leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
              <div className="text-gray-900 text-center text-xl not-italic font-bold leading-5 mt-16">
                1 BNB = 100000 WNTR
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Soft cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  5000 BNB
                </span>
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Hard cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  10000 BNB
                </span>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="card bg-white rounded-3xl max-w-md lg:mt-10 text-center py-16">
              <img src={two} alt="one" className="h-24 mx-auto" />
              <h5 className="card-title mt-10">Phase One</h5>
              <div className="text-gray-900 text-center text-base not-italic font-bold leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
              <div className="text-gray-900 text-center text-xl not-italic font-bold leading-5 mt-16">
                1 BNB = 100000 WNTR
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Soft cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  5000 BNB
                </span>
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Hard cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  10000 BNB
                </span>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="card bg-white rounded-3xl max-w-md  text-center py-16">
              <img src={three} alt="one" className="h-24 mx-auto" />
              <h5 className="card-title mt-10">Phase One</h5>
              <div className="text-gray-900 text-center text-base not-italic font-bold leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
              <div className="text-gray-900 text-center text-xl not-italic font-bold leading-5 mt-16">
                1 BNB = 100000 WNTR
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Soft cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  5000 BNB
                </span>
              </div>
              <div className="text-gray-900 text-center text-base not-italic font-normal leading-5">
                Hard cap:{" "}
                <span className="text-gray-900 text-base not-italic font-bold leading-5 opacity-100">
                  10000 BNB
                </span>
              </div>
            </div>
            {/* card */}
          </Slider>
        </div>
      </section>
    </>
  );
}
