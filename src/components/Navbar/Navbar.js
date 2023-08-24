import React from "react";
import logo from "../../assets/img/logo-colored-sign-black-text.svg";

import { Collapse, Dropdown, initTE } from "tw-elements";
import { Link } from "react-router-dom";
initTE({ Collapse, Dropdown });

export default function Navbar() {
  return (
    <>
      {/* <!-- Main navigation container --> */}
      <nav
        class="flex-no-wrap relative flex w-full items-center justify-between py-2  lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          {/* <!-- Logo --> */}
          <Link
            class="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            to="/"
          >
            <img src={logo} alt="TE Logo" loading="lazy" />
          </Link>
          {/* <!-- Collapsible navigation container --> */}
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            {/* <!-- Left navigation links --> */}
            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                {/* <!-- Our team link --> */}
                <Link
                  class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  to="/ourTeam"
                  data-te-nav-link-ref
                >
                  Our team
                </Link>
              </li>
              {/* <!-- Tokens link --> */}
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  to="/takenomics"
                  data-te-nav-link-ref
                >
                  Tokens
                </Link>
              </li>
              {/* <!-- Connect Wallet link --> */}
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  to="/"
                  data-te-nav-link-ref
                >
                  Connect Wallet
                </Link>
              </li>
              {/* <!--Lightpaper link --> */}
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  to="/"
                  data-te-nav-link-ref
                >
                  Lightpaper
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Right elements --> */}
          <div class="hidden relative lg:flex items-center">
            <div className="mx-[10px] py-2 px-3 text-white hover:text-gray-600 font-bold transition ease-linear delay-200">
              <Link>Sign in</Link>
            </div>
            <div className="mx-[10px] border-2 border-[#22a75d] text-white py-2 px-4 rounded-3xl hover:bg-[#22a75d] transition ease-in-out delay-200">
              <Link>Sign up</Link>
            </div>
          </div>
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
