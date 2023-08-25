import React from "react";
import image from "../../assets/img/section1bg.png";

const Section1 = () => {
  return (
    <section>
      <div className="grid pt-[70px] sm:mt-12 grid-cols-1 md:grid-cols-2">
        <div className="items-start">
          <img
            src={image}
            className="-scale-x-100 md:scale-100 w-full"
            alt="vectorImage"
          />
        </div>
        <div className="flex flex-col h-[700px] md:h-auto font-['Century_Gothic'] md:justify-center items-center pt-16 relative overflow-x-hidden bg-white rounded-tr-[200px] md:rounded-tr-none md:rounded-tl-[160px] lg:rounded-tl-[220px] xl:rounded-tl-[260px]">
          <div className="text-gray-900 w-[85%] md:w-[80%]">
            <div className="text-4xl not-italic 2xl:text-5xl font-bold leading-10">
              What makes <br className="md:hidden" /> us different?
            </div>
            <p className="text-sm my-4 font-bold 2xl:text-base leading-5 opacity-60">
              We would only launch tokens with the express permission of the
              creators.
            </p>
            <p className="2xl:text-base pe-6 md-pe-0 text-xs leading-6 opacity-60">
              There are several thousand celebrities and creators on Twitter,
              TikTok, Instagram, and YouTube with followings in the millions who
              we would be actively engaging before we go viral.
              <br />
              <br />
              We would get them on our platform and they would see the
              opportunity to create a fan-driven digital economy where their
              digital content can be traded as NFTs and their most loyal fans
              can have the monetary value of their creator's currency increase
              significantly as they promote their digital currency across their
              channels while our native token holders benefit from the Weentar
              popularity.
            </p>
          </div>
          <div className="h-48 left-48 top-[130px] w-full absolute">
            <img
              alt="Vector"
              src="https://file.rendit.io/n/uzZkJxc4SIpxZWEh3pQH.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
