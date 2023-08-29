import React from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function Header() {
  return (
    <header
      style={{
        background: `url(https://res.cloudinary.com/dtqdflngh/image/upload/v1693157622/bg_trnrfn.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="font-['Century_Gothic']"
    >
      <Navbar />
      <div>
        <div className="grid md:grid-cols-12 justify-between">
          <div className="ms-4 md:mt-40 md:ms-32 2xl:ms-[173px] col-span-5 text-start">
            <div className="mt-16 bg-gradient-to-t from-[#2B3087] to-[#00B4EC] bg-clip-text text-transparent font-bold text-sm 2xl:text-base">
              At Tokners We Are
            </div>
            <div className="mt-4 text-[#fff] leading-[44px] font-bold text-4xl 2xl:text-5xl xl:pr-4 2xl:pr-[42px]">
              Reimagining social media through the power of the blockchain.
            </div>
            <div className="mt-4 opacity-60 text-[#DDE2FF] text-sm 2xl:text-base font-400 leading-6 pr-8 md:pr-10 2xl:pr-[110px]">
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non-fungible
              Tokens that can be owned and traded on the Tokners network.
            </div>
            <div className="bg-[#22A75D] w-[147px] h-[48px] text-center text-white leading-[47px] rounded-[54px] learnMoreBtn mt-6">
              <a href="/">Learn More</a>
            </div>
          </div>
          <div
            className="md:hidden h-[400px]"
            style={{
              background: `url(https://res.cloudinary.com/dtqdflngh/image/upload/v1693157621/mainImg_nvtkaa.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="itemImg md:mt-14 col-span-7 2xl:mt-12 hidden md:block">
            <img
              src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157621/mainImg_nvtkaa.png"
              alt="two Iphone image"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
