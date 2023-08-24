import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bg from "../../assets/img/bg.png";
import img from "../../assets/img/takenomics/mask-group.svg";

export default function Header() {
  return (
    <header
      style={{ background: `url(${bg}) no-repeat`, backgroundSize: "cover" }}
      className="md:h-[900px]"
    >
      <Navbar />

      <div className=" px-4 md:px-36 mt-32">
        <h1 className="text-3xl not-italic w-4/5 md:max-w-sm font-bold text-white leading-10 flex items-start ">
          Tknrs Tokenomics and Token Distribution
        </h1>

        {/* grid */}

        <div className="grid md:grid-cols-5 md:mt-16">
          <div className="left mt-36 w-fit hidden md:block">
            <p className="not-italic font-bold text-white leading-54">
              Premined Tokens
            </p>
            <p className="text-blue-600 text-3xl not-italic font-bold ">
              3,000,000,000
            </p>
            <p className="text-right text-base not-italic font-bold text-white leading-54 ">
              Tknrs Tokens
            </p>
          </div>

          <div className=" md:col-span-3 flex flex-col md:items-center mt-3">
            <div className="text w-fit">
              <p className="text-base not-italic  font-bold w-2/3 md:w-auto text-white leading-54 ">
                Tknrs Token Distribution Schedule Total Supply:
              </p>
              <p className="text-yellow-500 text-center not-italic font-bold text-5xl lg:text-6xl leading-[96px]">
                10,000,000,000
              </p>
              <p className="text-right text-base not-italic font-bold text-white leading-54 ">
                Tknrs Tokens
              </p>
            </div>
            {/* left */}
            <div className="flex flex-row justify-end w-full">
              <div className="left w-fit  md:hidden ">
                <p className="not-italic font-bold text-white leading-54">
                  Premined Tokens
                </p>
                <p className="text-blue-600 text-4xl md:text-3xl not-italic font-bold ">
                  3,000,000,000
                </p>
                <p className="text-right text-base not-italic font-bold text-white leading-54 ">
                  Tknrs Tokens
                </p>
              </div>
            </div>
            {/* left */}
            {/* right */}
            <div className="text-left w-full">
              <div className="right w-fit md:hidden">
                <p className="not-italic font-bold text-white leading-54">
                  Premined Tokens
                </p>
                <p className="text-red-600 text-4xl md:text-3xl not-italic font-bold ">
                  7,000,000,000
                </p>
                <p className="text-right text-base not-italic font-bold text-white leading-54 ">
                  Tknrs Tokens
                </p>
              </div>
            </div>
            {/* right */}
            {/* </div> */}
            <div className="mt-4">
              <img src={img} alt="" />
            </div>
          </div>

          <div className="right mt-56 w-fit hidden md:block">
            <p className="not-italic font-bold text-white leading-54">
              Premined Tokens
            </p>
            <p className="text-red-600 text-3xl not-italic font-bold ">
              7,000,000,000
            </p>
            <p className="text-right text-base not-italic font-bold text-white leading-54 ">
              Tknrs Tokens
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
