import React from "react";

const Section1 = () => {
  return (
    <section>
      <div className="grid pt-[70px] grid-cols-1 md:grid-cols-2">
        <div className="items-start">
          <img
            src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157628/section1bg_lc7ffu.png"
            className="-scale-x-100 md:scale-100 w-full"
            alt="Colorful Image"
          />
        </div>
        <div className="flex flex-col h-[700px] md:h-auto font-['Century_Gothic'] md:justify-center items-center pt-20 relative overflow-x-hidden bg-white rounded-tr-[200px] md:rounded-tr-none md:rounded-tl-[160px] lg:rounded-tl-[220px] xl:rounded-tl-[260px] 2xl:rounded-tl-[400px]">
          <div className="text-gray-900 ms-5 md:ms-16 md:me-[32px] xl:ms-28 xl:me-24 2xl:ms-36 2xl:me-[215px]">
            <div className="text-4xl not-italic md:text-4xl 2xl:text-5xl font-bold leading-10">
              What makes <br className="md:hidden" /> us different?
            </div>
            <p className="text-sm my-4 font-bold  2xl:text-base leading-5 opacity-60">
              We would only launch tokens with the express permission of the
              creators.
            </p>
            <p className="2xl:text-base pe-6 md-pe-0 text-sm leading-6 opacity-60">
              There are several thousand celebrities and creators on twitter,
              tiktok, Instagram and YouTube with followings in the millions who
              we would be actively engaging before we go viral.
              <br />
              <br />
              We would get them on our platform and they would see the
              opportunity to create a fan driven digital economy where their
              digital content can be traded as NFTs and their most loyal fans
              can have the monetary value of their creator's currency increase
              significantly as they promote their digital currency across their
              channels while our native token holders benefit from the Weentar
              popularity.
            </p>
          </div>
          <div className="h-48 left-48 top-[130px] w-full absolute">
            <img
              alt="Weetnar Image"
              src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157625/weetnarBg_tfmccs.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
