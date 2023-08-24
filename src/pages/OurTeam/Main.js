import React from "react";
import member from "../../assets/img/ourTeam/image-1.png";
import member2 from "../../assets/img/ourTeam/image-2.png";
import member3 from "../../assets/img/ourTeam/image-3.png";
import member4 from "../../assets/img/ourTeam/image-4.png";
import bg from "../../assets/img/ourTeam/mask-group.png";
import Slider from "react-slick";

export default function Main() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.1,
    slidesToScroll: 4.1,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const cardData = [
    {
      img: member,
      name: "Brad Pie",
      designation: "CEO and Co Founder",
      number: "one",
    },
    {
      img: member2,
      name: "Lee Lee",
      designation: "CTO and Co Founder",
      number: "twoBgImg",
    },
    {
      img: member3,
      name: "Shan Khan",
      designation: "Head of Development",
      number: "three",
    },
    {
      img: member4,
      name: "Shan Lopez",
      designation: "Head of marketing",
      number: "four",
    },
    {
      img: member3,
      name: "Lee",
      designation: "Community Manager",
      number: "five",
    },
  ];
  return (
    <>
      <main>
        <div className="mx-6 md:ms-16 mt-20 mb-36">
          <h1 className="text-4xl not-italic font-bold text-white">Our Team</h1>
          <div className="ms-auto">
            <Slider {...settings}>
              {cardData.map((item, i) => (
                <div className="cards mt-8" key={i}>
                  <div className="card pt-3 sm:me-4  text-center rounded-3xl bg-[#0D0B16] overflow-hidden">
                    <div className={`${item.number}`}>
                      <div className="name text-lg not-italic font-bold text-white">
                        {item.name}
                      </div>
                      <div className="designation text-sm not-italic font-normal text-white opacity-60">
                        {item.designation}
                      </div>
                      <div className="img mt-4 flex justify-center">
                        <img
                          src={item.img}
                          alt="teamMember"
                          className="max-w-[257px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </>
  );
}
