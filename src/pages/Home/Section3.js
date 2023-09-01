import React, { useState } from "react";

const Section3 = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="pt-16 font-['Century_Gothic']">
      <div className="grid grid-cols-1 lg:grid-cols-12 md:px-12 2xl:px-44 overflow-hidden">
        <div className="flex md:hidden">
          <img
            src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157627/womanHoldingPhone_rt3qud.png"
            className="w-[335px] h-[348px] mx-auto mb-16"
            alt="Woman Holding Phone "
          />
        </div>
        <div className="mx-auto text-start px-5  sm:px-0 2xl:ms-6 mt-3 2xl:mt-6  text-white text-sm 2xl:text-base md:4 col-span-5">
          <div className="py-4 text-4xl 2xl:text-5xl font-bold leading-[54px] md:flex items-baseline">
            <img
              src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157625/wLogo_lpegc8.png"
              alt="logo"
              className="md:me-3 w-[58px]"
            />{" "}
            <p className="hidden md:block">Tokner is coming</p>
            <p className=" md:hidden">Weetnar is coming</p>
          </div>
          <div className="font-[700] leading-[24px] opacity-60 pe-[1px] sm:pe-0 ">
            Cryptocurrency adoption is at less than 1% of the global world
            population with some countries and entities actively fighting
            against its mass adoption and the smartest developers and nerds
            holding the fort.
          </div>
          <div className="my-2 opacity-60 text-[#DDE2FF] font-[400] leading-6 drop-shadow-2xl">
            Bitcoin was the first, and it has since grown to thousands of tokens
            launched all aiming to fix one problem or the other with some quite
            simply FOMOing the moment. Our goal is to bring mass adoption to the
            cryptocurrency space by dumbing it down. How far down? So down that
            even a celebrity can explain it in simple words to their followers
            and have them download an app, buy into the social currency of their
            favorite person and watch their investment as is with other crypto
            currency projects.
          </div>

          {!isShowMore ? (
            <>
              <div className="my-3 opacity-60 text-[#DDE2FF] font-[400] leading-6 drop-shadow-2x hidden lg:block">
                We are trying to do to this space what investment apps did for
                the "nonexistent retail investors". We are gamifying digital
                currency, bringing in popular faces instead of
                hard-to-understand projects to make it the norm and
                inadvertently being the "gateway drug" for a lot of people to
                finally give this space a real look.
              </div>{" "}
              <div className="my-3 font-[700] text-[#9FA1A6] leading-[24px] hidden lg:block ">
                A new digital economy is coming. People would be just as
                powerful as countries and creators would be paid beyond the
                peanuts that conventional social media platforms can offer.
              </div>
              <div className="my-2 font-[400] text-[#9FA1A6] leading-[24px] hidden lg:block">
                There would be markets and advertisers with little to offer
                would not find home there. Like Kanye said,
                <div className="flex flex-row flex-wrap gap-3 my-4 items-start  2xl:pe-6">
                  <div className="text-2xl font-bold leading-[24px] text-[#ffd100] mt-1 hidden lg:contents">
                    “{" "}
                  </div>
                  <div className="font-bold leading-[24px] italic text-[#9fa1a6] hidden lg:contents">
                    "Personalities would become the new currency, and services
                    would be built on top of them".
                  </div>
                </div>
              </div>
              <div className="text-white opacity-60 text-base hidden lg:block ">
                Well, Kanye didn't exactly say that, but it sounds like
                something we hope he <br /> would say.
                <br />
                <br />
                Currency is digital, it has been that way for a while now, but
                this time there would be no ded presidents on the money, there
                would people like you on the money, and you would own it because
                it would make the most sense in the world.
              </div>
            </>
          ) : (
            <>
              {/* mobile */}
              <div className="my-3 opacity-60 text-[#DDE2FF] font-[400] leading-6 drop-shadow-2x lg:hidden 2xl:pe-5">
                We are trying to do to this space what investment apps did for
                the "nonexistent retail investors". We are gamifying digital
                currency, bringing in popular faces instead of
                hard-to-understand projects to make it the norm and
                inadvertently being the "gateway drug" for a lot of people to
                finally give this space a real look.
              </div>{" "}
              <div className="my-3 font-[700] text-[#9FA1A6] leading-[24px] lg:hidden  2xl:pr-5">
                A new digital economy is coming. People would be just as
                powerful as countries and creators would be paid beyond the
                peanuts that conventional social media platforms can offer.
              </div>
              <div className="my-2 font-[400] text-[#9FA1A6] leading-[24px]  lg:hidden">
                There would benew markets and advertisers with little to offer
                would not find home there. Like Kanye said,
                <div className="flex flex-row gap-3 my-4 items-start  2xl:pr-12">
                  <div className="text-2xl font-bold leading-[24px] text-[#ffd100] mt-1  lg:hidden">
                    “{" "}
                  </div>
                  <div className="font-bold leading-[24px] italic text-[#9fa1a6]  lg:hidden pr-10">
                    Personalities would become the new currency, and services
                    would be built on top of them".
                  </div>
                </div>
              </div>
              <div className="text-white opacity-60 text-base  2xl:pr-10 lg:hidden">
                Well, Kanye didn't exactly say that, but it sounds like
                something we hope he would say.
                <br />
                <br />
                Currency is digital, it has been that way for a while now, but
                this time there would be no dead presidents on the money, there
                would people like you on the money, and you would own it because
                it would make the most sense in the world.
              </div>
            </>
          )}
          <div className="md:w-[147px] md:h-[48px] md:text-center leading-[47px] text-lg font-bold decoration-dotted underline md:no-underline text-[#22A75D] md:text-white md:border border-green-600 md:rounded-[54px] ms:learnMoreBtn mt-5">
            <a
              href="javascript:void(0)"
              className="md:hidden"
              onClick={toggleReadMoreLess}
            >
              {isShowMore ? "Hide" : "Read More"}
            </a>
            <a href="" className="hidden md:block">
              Read more
            </a>
          </div>
        </div>
        <div className="hidden lg:block col-span-7 image">
          <img
            src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157627/womanHoldingPhone_rt3qud.png"
            className="2xl:w-[891px] 2xl:h-[928px]"
            alt="Woman Holding Phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
