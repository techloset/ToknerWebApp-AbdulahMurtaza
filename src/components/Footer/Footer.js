import React from "react";
import logo from "../../assets/img/logo-colored-sign-black-text.svg";
import design from "../../assets/img/vector.svg";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer id="mainFooter">
        <div className="-mt-16 md:mt-14">
          <p className="text-gray-100 text-4xl not-italic font-bold text-center leading-[54px]">
            How to Buy?
          </p>
          <div id="cards" className="grid md:grid-cols-3 px-10 gap-4 mt-3">
            <div className="w-full h-[270px] bg-[#171b29] flex flex-row items-center py-8 px-5 rounded-[25px]">
              <div className="text-xs  font-bold opacity-60 leading-[24px] text-white self-start">
                01
              </div>
              <div className="text-lg  font-bold leading-[24px] text-white w-full">
                First Connect your Metamask or TrustWallet to the "Connect
                Wallet" on the Homepage.
              </div>
            </div>

            <div className="w-full h-[270px] bg-[#171b29] flex flex-row items-center py-8 px-5 rounded-[25px] md:mt-10">
              <div className="text-xs  font-bold opacity-60 leading-[24px] text-white self-start">
                02
              </div>
              <div className="text-lg  font-bold leading-[24px] text-white w-full">
                Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale
                wallet
              </div>
            </div>
            <div className="w-full h-[270px] bg-[#171b29] flex flex-row items-center py-8 px-5 rounded-[25px]">
              <div className="text-xs  font-bold opacity-60 leading-[24px] text-white self-start">
                03
              </div>
              <div className="text-lg  font-bold leading-[24px] text-white w-full">
                Then after you will received your $WNTR to your address within
                24hours.
              </div>
            </div>
          </div>
        </div>
        ;
        <div className="mt-44 md:block hidden px-4">
          <ul className="list-none flex uppercase gap-16 font-bold text-white justify-center">
            <li>
              <a href="">Our team</a>
            </li>
            <span className="opacity-60">/</span>
            <li>
              <a href="">tokens</a>
            </li>
            <span className="opacity-60">/</span>
            <li>
              <a href="">connect wallet</a>
            </li>
            <span className="opacity-60">/</span>
            <li>
              <a href="">lightpaper</a>
            </li>
          </ul>
        </div>
        <div className="footer  pb-16 grid md:grid-cols-3 gap-4  md:items-stretch mt-20 md:mt-48 ">
          <div className="img  flex justify-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="middle flex justify-center items-center">
            <ul className="flex gap-2 md-gap-6">
              <li className="border p-4 border-opacity-60 rounded-full">
                <a href="">
                  <FaTwitter className="text-white" />
                </a>
              </li>
              <li className="border p-4 border-opacity-60 rounded-full">
                <a href="">
                  <FaFacebook className="text-white" />
                </a>
              </li>
              <li className="border p-4 border-opacity-60 rounded-full">
                <a href="">
                  <FaInstagram className="text-white" />
                </a>
              </li>
              <li className="border p-4 border-opacity-60 rounded-full">
                <a href="">
                  <FaMedium className="text-white" />
                </a>
              </li>
              <li className="border p-4 border-opacity-60 rounded-full">
                <a href="">
                  <FaGithub className="text-white" />
                </a>
              </li>
              <li className="border p-4 border-opacity-60 rounded-full">
                <a href="">
                  <FaReddit className="text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="last flex flex-col items-center justify-center">
            <p className="text-[#fff] font-bold text-sm">
              © 2021 Tokners. All rights reserved.
            </p>
            <div className="flex gap-2 justify-end opacity-60">
              <img src={design} alt="design" />
              <a href="" className="text-white text-base  underline">
                Design by Abdullah Murtaza
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
