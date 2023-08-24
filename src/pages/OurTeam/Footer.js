import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/img/logo-colored-sign-black-text.svg";
import design from "../../assets/img/vector.svg";

export default function FooterBottom() {
  return (
    <>
      <footer>
        <div className=" md:block hidden px-4">
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
