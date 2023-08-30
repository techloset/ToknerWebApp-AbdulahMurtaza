import React from "react";

export default function Hero() {
  return (
    <div className="md:px-10 p-4 2xl:px-44 font-['Century_Gothic'] bg-[#0F1320]">
      <div className="grid md:grid-cols-2 gap-5 mt-[50px] sm:mt-12 ">
        {/* First Card */}
        <div className="bg-[#171b29] flex flex-[1 1 48%] py-8 md:py-10 px-8 2xl:px-16 text-start rounded-3xl flex-col justify-between items-start gap-8 mb-20 2xl:py-16 2xl:max-w-[777px] 2xl:max-h-[436px]">
          <div className="self-stretch flex flex-col justify-between gap-5 items-start">
            <div
              className="shadow-[0px_15px_25px_0px_rgba(34,_167,_93,_0.25)] bg-[#22a75d] flex flex-col justify-center ml-px w-16 h-16 shrink-0 items-center rounded-[50%]"
              id="Ellipse6"
            >
              <img
                src="https://file.rendit.io/n/gQkQMC2KhNXEiAMG7gpx.svg"
                className="w-6"
              />
            </div>
            <div
              className="text-[28px] 2xl:text-4xl font-bold leading-[54px] text-white flex"
              id="ForCreators1"
            >
              For{" "}
              <div className="underline text-[#22a75d] ps-3" id="ForCreators">
                Creators
              </div>
            </div>
            <div className="leading-[24px] text-white w-full opacity-50">
              Creators can gain independence through a decentralised digital
              currency system that is dependent on growing and engaging with the
              community and also their star power. They own 10-15% of the total
              value of the tokens minted.
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <a href="#" className="text-sm underline font-bold text-[#22a75d]">
              Learn More
            </a>
            <img
              src="https://file.rendit.io/n/8XGeHM2LhEaMF476xErp.svg"
              className="mt-1 w-3 shrink-0"
              id="Union"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-[#171b29] flex flex-[1 1 48%] py-8 md:py-10 px-8 2xl:px-16 text-start rounded-3xl flex-col justify-between items-start gap-8 mt-20 2xl:py-16 2xl:max-w-[777px] 2xl:max-h-[436px]">
          <div className="self-stretch flex flex-col justify-between gap-5 items-start">
            <div
              className="shadow-[0px_15px_25px_0px_rgba(34,_120,_212,_0.25)] bg-[#2278d4] flex flex-col justify-center ml-px w-16 h-16 shrink-0 items-center rounded-[50%]"
              id="Ellipse6"
            >
              <img
                src="https://file.rendit.io/n/ZENz2oO1QSRBdeyFPqyP.svg"
                className="w-6"
              />
            </div>
            <div
              className="text-[28px] 2xl:text-4xl font-bold leading-[54px] text-white flex"
              id="ForCreators1"
            >
              For{" "}
              <div className="underline text-[#2278d4] ps-3" id="ForCreators">
                Holders
              </div>
            </div>
            <div className="leading-[24px] text-white w-full opacity-50 2xl:pr-3">
              Holding social tokens allows the individual to gain access to
              benefits including unreleased content, private communities, direct
              access to celebrity, early- access to tickets and more aswell as
              the ability to trade with other communities in order to gain
              access to more creator content with early token buyers being the
              biggest winners as the value of the token increases with more
              buyers.
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <a href="#" className="text-sm underline font-bold text-[#2278d4]">
              Learn More
            </a>
            <img
              src="https://file.rendit.io/n/MJ4KG0ZujmVZFzChQ0sm.svg"
              className="mt-1 w-3 shrink-0"
              id="Union"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
