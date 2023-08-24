import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import mainImg from "../../assets/img/img.png";
import bg from "../../assets/img/bg.png";

export default function Header() {
  return (
    <header
      style={{ background: `url(${bg}) no-repeat`, backgroundSize: "cover" }}
    >
      <Navbar />
      <div>
        <div className="flex-wrap md:flex-nowrap flex gap-6 justify-between">
          <div className="mt-52 md:ms-16 max-w-[100%] ms-3 text-start md:max-w-[39%]">
            <div className="my-2 bg-gradient-to-t from-[#2B3087] to-[#00B4EC] bg-clip-text text-transparent font-[500] text-[16px]">
              At Tokners Are
            </div>
            <div className="my-2 text-[#fff] font-[700] leading-[54px] text-[40px]">
              Reimagining social media through the power of the blockchain.
            </div>
            <div className="my-2 opacity-60 text-[#DDE2FF] text-[16px] font-[400] leading-6">
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non fungible
              Tokens that can be owned and traded on the Tokners network
            </div>
            <div className="bg-[#22A75D] w-[147px] h-[48px] text-center leading-[47px] border rounded-[54px] learnMoreBtn mt-5">
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="itemImg">
            <img src={mainImg} className="max-w-[700px} w-[100%]" alt="img" />
          </div>
        </div>
      </div>
    </header>
  );
}
