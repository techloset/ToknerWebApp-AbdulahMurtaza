import React from "react";
import MobileCards from "./MobileCards";

function PreSale() {
  return (
    <>
      <div className="preSaleBgImage h-[1320px] md:block hidden font-['Century_Gothic']">
        <h2 className="text-5xl text-center font-bold text-white mb-6 pt-[320px]">
          Presale Details
        </h2>
        <div className="grid grid-cols-3 gap-2 xl:gap-2 mx-12 2xl:mx-40">
          {/* Card 1 */}
          <div className="card bg-white text-gray-900 font-bold rounded-3xl mx-auto 2xl:max-w-[511px] 2xl:h-[585px] w-full text-center py-16 mb-10">
            <div
              className="bg-image py-3"
              style={{
                background: `url(https://res.cloudinary.com/dtqdflngh/image/upload/v1693157622/one_esczbm.svg) center no-repeat`,
              }}
            >
              <div className="flex justify-center">
                <svg
                  width="132"
                  height="132"
                  viewBox="0 0 132 132"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_7_375)">
                    <path
                      d="M107 51C107 73.6437 88.6437 92 66 92C25 92 25 92 25 51C25 28.3563 43.3563 10 66 10C88.6437 10 107 28.3563 107 51Z"
                      fill="#22A75D"
                    />
                  </g>
                  <text
                    x="63"
                    y="54"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    font-size="26"
                    font-weight="700"
                    fill="#0F1320"
                  >
                    01
                  </text>
                  <defs>
                    <filter
                      id="filter0_d_7_375"
                      x="0"
                      y="0"
                      width="132"
                      height="132"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="15" />
                      <feGaussianBlur stdDeviation="12.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.133333 0 0 0 0 0.654902 0 0 0 0 0.364706 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_7_375"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_7_375"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h5 className="card-title mt-10 text-3xl ">Phase One</h5>
              <div className=" leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
            </div>
            <div className=" text-xl  leading-5 mt-16">1 BNB = 100000 WNTR</div>
            <div className="text-base font-normal leading-5">
              Soft cap:{" "}
              <span className=" leading-5 font-bold opacity-100">5000 BNB</span>
            </div>
            <div className="text-base font-normal leading-5">
              Hard cap:{" "}
              <span className=" leading-5 font-bold opacity-100">
                10000 BNB
              </span>
            </div>
          </div>
          {/* End Card 1 */}
          {/* Card 2 */}
          <div className="card bg-white text-gray-900 font-bold rounded-3xl mx-auto 2xl:max-w-[511px] 2xl:h-[585px] w-full text-center py-16 mt-10">
            <div
              className="bg-image py-3"
              style={{
                background: `url(https://res.cloudinary.com/dtqdflngh/image/upload/v1693157624/two_lj4hps.svg) center no-repeat`,
              }}
            >
              <div className="flex justify-center">
                <svg
                  width="132"
                  height="132"
                  viewBox="0 0 132 132"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_7_376)">
                    <path
                      d="M107 51C107 73.6437 88.6437 92 66 92C25 92 25 92 25 51C25 28.3563 43.3563 10 66 10C88.6437 10 107 28.3563 107 51Z"
                      fill="#2278D4"
                    />
                  </g>
                  <text
                    x="63"
                    y="54"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    font-size="26"
                    font-weight="700"
                    fill="#0F1320"
                  >
                    02
                  </text>
                  <defs>
                    <filter
                      id="filter0_d_7_376"
                      x="0"
                      y="0"
                      width="132"
                      height="132"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="15" />
                      <feGaussianBlur stdDeviation="12.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.133333 0 0 0 0 0.470588 0 0 0 0 0.831373 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_7_376"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_7_376"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h5 className="card-title mt-10 text-3xl ">Phase Two</h5>
              <div className=" leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
            </div>
            <div className=" text-xl  leading-5 mt-16">1 BNB = 100000 WNTR</div>
            <div className="text-base font-normal leading-5">
              Soft cap:{" "}
              <span className=" leading-5 font-bold opacity-100">5000 BNB</span>
            </div>
            <div className="text-base font-normal leading-5">
              Hard cap:{" "}
              <span className=" leading-5 font-bold opacity-100">
                10000 BNB
              </span>
            </div>
          </div>
          {/* End Card 2 */}
          {/* Card 3 */}
          <div className="card bg-white   text-gray-900 font-bold rounded-3xl mx-auto 2xl:max-w-[511px] 2xl:h-[585px] w-full text-center py-16 mb-10">
            <div
              className="bg-image py-3"
              style={{
                background: `url(https://res.cloudinary.com/dtqdflngh/image/upload/v1693157623/three_snrq6c.svg) center no-repeat`,
              }}
            >
              <div className="flex justify-center">
                <svg
                  width="132"
                  height="132"
                  viewBox="0 0 132 132"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_7_377)">
                    <path
                      d="M107 51C107 73.6437 88.6437 92 66 92C25 92 25 92 25 51C25 28.3563 43.3563 10 66 10C88.6437 10 107 28.3563 107 51Z"
                      fill="#FFD100"
                    />
                  </g>
                  <text
                    x="63"
                    y="54"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    font-size="26"
                    font-weight="700"
                    fill="#0F1320"
                  >
                    03
                  </text>
                  <defs>
                    <filter
                      id="filter0_d_7_377"
                      x="0"
                      y="0"
                      width="132"
                      height="132"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="15" />
                      <feGaussianBlur stdDeviation="12.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.819608 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_7_377"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_7_377"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h5 className="card-title mt-10 text-3xl ">Phase Three</h5>
              <div className=" leading-5 opacity-60">
                0/04/2021 - 16/04/2021
              </div>
            </div>
            <div className=" text-xl  leading-5 mt-16">1 BNB = 100000 WNTR</div>
            <div className="text-base font-normal leading-5">
              Soft cap:{" "}
              <span className=" leading-5 font-bold opacity-100">5000 BNB</span>
            </div>
            <div className="text-base font-normal leading-5">
              Hard cap:{" "}
              <span className=" leading-5 font-bold opacity-100">
                10000 BNB
              </span>
            </div>
          </div>
          {/* End Card 3 */}
        </div>
      </div>

      {/* mobile view */}

      <MobileCards />
    </>
  );
}

export default PreSale;
