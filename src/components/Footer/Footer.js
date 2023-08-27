import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="mainFooter font-['Century_Gothic']"
      style={{
        background: `url(https://res.cloudinary.com/dtqdflngh/image/upload/v1693157625/footerBg_sapms6.png) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="mt-16 md:mt-14 text-white">
        <div className="bg-cover h-auto w-auto mx-8">
          <p className="text-4xl font-semibold text-center my-10">How to buy</p>
          <div className="flex lg:flex-nowrap flex-wrap justify-center  lg:mx-0 mx-5 gap-2">
            <div className="w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative mt-[50px] ">
              <span className="text-xs font-bold leading-6 opacity-30 ml-[30px] pt-[30px] block">
                01
              </span>
              <div className="flex flex-col justify-center items-center text-lg font-bold leading-6 mt-[45px] xs:mt-5 xs:text-base">
                <p className="w-[56%] xs:w-[70%] 2xl:w-[52%]">
                  First Connect your Metamask or TrustWallet to the "Connect
                  Wallet" on the Homepage.
                </p>
              </div>
              <div className="lg:h-[86px] lg:w-[86px] w-[60px] h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute mt-3 lg:mt-0 lg:top-[43%] lg:left-[93%] left-[50%] top-[100%] -translate-x-2/4 -translate-y-2/4 lg:transform-none z-50">
                <div>
                  <svg
                    className="rotate-90 lg:rotate-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#22A75D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[110px] sm:mt-5 xs:mt-5">
              <span className="text-xs font-bold leading-6 opacity-30 ml-[30px] pt-[30px] block">
                02
              </span>
              <div className="flex flex-col justify-center items-center text-lg font-bold leading-6 mt-[45px] xs:mt-5 xs:text-base">
                <p className="w-[56%] xs:w-[70%] 2xl:w-[52%]">
                  Then send a minimum of 0.1 BNB or a maximum of 10 BNB to the
                  Presale wallet.
                </p>
              </div>
              <div className="lg:h-[86px] lg:w-[86px] w-[60px] h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute mt-3 lg:mt-0 lg:top-[20%] lg:left-[93%] left-[50%] top-[100%] -translate-x-2/4 -translate-y-2/4 lg:transform-none z-50">
                <div>
                  <svg
                    className="rotate-90 lg:rotate-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#FFD100"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[50px] sm:mt-5 xs:mt-5">
              <span className="text-xs font-bold leading-6 opacity-30 ml-[30px] pt-[30px] block">
                03
              </span>
              <div className="flex flex-col justify-center items-center text-lg font-bold leading-6 mt-[45px] xs:mt-5 xs:text-base">
                <p className="w-[56%] xs:w-[70%] 2xl:w-[52%]">
                  Then you will receive your $WNTR to your address within 24
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 md:block hidden px-4">
        <ul className="list-none flex uppercase text-base gap-16 font-bold text-white justify-center">
          <li className="underline">
            <Link to="/">Our team</Link>
          </li>
          <span className="opacity-60">/</span>
          <li className="underline">
            <Link to="/">tokens</Link>
          </li>
          <span className="opacity-60">/</span>
          <li className="underline">
            <Link to="/">connect wallet</Link>
          </li>
          <span className="opacity-60">/</span>
          <li className="underline">
            <Link to="/">lightpaper</Link>
          </li>
        </ul>
      </div>
      <div className="footer pb-10 md:pb-28 grid md:grid-cols-3 gap-4 md:items-stretch mt-20 md:mt-48">
        <div className="img flex justify-center mb-4 sm:mb-0">
          <img
            src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157619/logo_u772uc.svg"
            alt="logo"
            className="max-w-[247px]"
          />
        </div>
        <div className="middle flex justify-center items-center  mb-4 sm:mb-0">
          <ul className="flex gap-2 md-gap-6">
            <li className="border p-4 border-opacity-60 rounded-full">
              <a href="https://facebook.com">
                <img
                  src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157616/facebook-4-1_rdxxia.svg"
                  alt="Facebook"
                  className="max-w-[20px]"
                />
              </a>
            </li>
            <li className="border p-4 border-opacity-60 rounded-full">
              <a href="https://github.com">
                <img
                  src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157618/github-1_clnljr.svg"
                  alt="GitHub"
                  className="max-w-[20px]"
                />
              </a>
            </li>
            <li className="border p-4 border-opacity-60 rounded-full">
              <a href="https://instagram.com">
                <img
                  src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157616/instagram-1-1_lkazbc.svg"
                  alt="Instagram"
                  className="max-w-[20px]"
                />
              </a>
            </li>
            <li className="border p-4 border-opacity-60 rounded-full">
              <a href="https://medium.com">
                <img
                  src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157622/medium-1_vbq1xs.svg"
                  alt="Medium"
                  className="max-w-[20px]"
                />
              </a>
            </li>
            <li className="border p-4 border-opacity-60 rounded-full">
              <a href="https://reddit.com">
                <img
                  src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157622/reddit-1_hiuxwd.svg"
                  alt="Reddit"
                  className="max-w-[20px]"
                />
              </a>
            </li>
            <li className="border p-4 border-opacity-60 rounded-full">
              <a href="https://twitter.com">
                <img
                  src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157623/twitter-2-1_gvjckq.svg"
                  alt="Twitter"
                  className="max-w-[20px]"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="last flex flex-col items-center justify-center">
          <p className="text-white font-bold text-sm">
            © 2021 Tokners. All rights reserved.
          </p>
          <div className="flex gap-2 justify-end opacity-60">
            <img
              src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157619/footerSmallLogo_yo59vb.svg"
              alt="design by"
            />
            <a
              href="https://abdi-portfolio.web.app/"
              className="text-white text-base underline"
            >
              Design by Abdullah Murtaza
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
