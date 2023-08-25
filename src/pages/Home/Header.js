import React from "react";
import Navbar from "../../components/navbar/Navbar";
import mainImg from "../../assets/img/img.png";
import bg from "../../assets/img/bg.png";

export default function Header() {
  return (
    <header
      style={{ background: `url(${bg}) no-repeat`, backgroundSize: "cover" }}
      className="font-['Century_Gothic']"
    >
      <Navbar />
      <div>
        <div className="grid md:grid-cols-3 md:ms-20 justify-between">
          <div className="mt-6 md:mt-40 ms-3 text-start ">
            <div className="mt-6 bg-gradient-to-t from-[#2B3087] to-[#00B4EC] bg-clip-text text-transparent font-[500] text-sm 2xl:text-base">
              At Tokners Are
            </div>
            <div className="mt-6 text-[#fff] font-[700] leading-[54px] text-4xl 2xl:text-5xl">
              Reimagining social media through the power of the blockchain.
            </div>
            <div className="mt-6 opacity-60 text-[#DDE2FF] text-sm 2xl:text-base font-[400] leading-6 pr-8 md:pr-2 2xl:pr-20">
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non fungible
              Tokens that can be owned and traded on the Tokners network
            </div>
            <div className="bg-[#22A75D] w-[147px] h-[48px] text-center text-white leading-[47px] rounded-[54px] learnMoreBtn mt-6">
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="itemImg md:mt-3  2xl:-mt-20 col-span-2">
            <img src={mainImg} alt="img" />
          </div>
        </div>
      </div>
    </header>
  );
}
