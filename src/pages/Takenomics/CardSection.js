import React from "react";
import ellipse from "../../assets/img/takenomics/ellipse-18.svg";
import ellipse2 from "../../assets/img/takenomics/ellipse-19.svg";
import ellipse3 from "../../assets/img/takenomics/ellipse-20.svg";
import ellipse4 from "../../assets/img/takenomics/ellipse-21.svg";
import ellipse5 from "../../assets/img/takenomics/ellipse-22.svg";
import ellipse6 from "../../assets/img/takenomics/ellipse-23.svg";
import ellipse7 from "../../assets/img/takenomics/ellipse-24.svg";
import ellipse8 from "../../assets/img/takenomics/ellipse-25.svg";
import ellipse9 from "../../assets/img/takenomics/ellipse-26.svg";

export default function CardSection() {
  const cardData = [
    {
      url: ellipse,
      title: "Year 1",
      days: "Day 1 - Day 90",
      token: " 10M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-green-600",
    },
    {
      url: ellipse2,
      title: "Year 2",
      days: "Day 90 - Day 365",
      token: " 5M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#FFD100]",
    },
    {
      url: ellipse3,
      title: "Year 3",
      days: "Day 1 - Day 90",
      token: " 4M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#0F87CA]",
    },
    {
      url: ellipse4,
      title: "Year 4",
      days: "Day 1 - Day 90",
      token: " 3M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#E20613]",
    },
    {
      url: ellipse5,
      title: "Year 5",
      days: "Day 1 - Day 90",
      token: " 2M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#22A75D]",
    },
    {
      url: ellipse6,
      title: "Year 6",
      days: "Day 1 - Day 90",
      token: " 1M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#FFD100]",
    },
    {
      url: ellipse7,
      title: "Year 7",
      days: "Day 1 - Day 90",
      token: " 1M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#0F87CA]",
    },
    {
      url: ellipse8,
      title: "Year 8",
      days: "Day 1 - Day 90",
      token: " 1M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#E20613]",
    },
    {
      url: ellipse9,
      title: "Year 9",
      days: "Day 1 - Day 90",
      token: " 1M Tokens/Day",
      des: "(900M Tokens)",
      color: "text-[#22A75D]",
    },
  ];

  return (
    <section>
      <div className="flex flex-wrap gap-2 md:gap-3 px-4 md:px-8 my-16 md:my-0 justify-center">
        {/* card */}
        {cardData.map((item, i) => {
          return (
            <div key={i} className="card bg-[#171b29] p-5 flex-col rounded-3xl">
              <div className="flex ms-3 md:ms-auto">
                <img src={item.url} alt="" className="max-w-[22.4px]" />
                <div
                  className={`${item.color} text-xs md:text-sm ms-3 font-bold leading-10`}
                >
                  {item.title}
                </div>
              </div>
              <div className="md:ms-10">
                {i < 2 ? (
                  <div className="text-white text-sm md:text-lg font-bold">
                    {item.days}
                  </div>
                ) : (
                  <div className="text-white invisible text-sm md:text-lg font-bold">
                    {item.days}
                  </div>
                )}
                {i < 2 ? (
                  <div className="text-base md:text-xl font-normal leading-8 text-white opacity-70">
                    {item.token}
                  </div>
                ) : (
                  <div className="text-base md:text-xl font-normal  leading-8 text-white opacity-70">
                    {item.token} <span className="invisible">i</span>
                  </div>
                )}
                {/* <div className="text-base md:text-xl font-normal leading-8 text-white opacity-70">
                  {item.token}
                </div> */}
                <div className="text-sm font-normal leading-8 text-white opacity-70">
                  {item.des}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
