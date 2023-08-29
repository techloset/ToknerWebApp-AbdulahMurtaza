import React, { useEffect } from "react";

import { Collapse, Dropdown, initTE } from "tw-elements";
import { Link } from "react-router-dom";
initTE({ Collapse, Dropdown });

export default function Navbar() {
  useEffect(() => {
    initTE({ Collapse, Dropdown });
  }, []);

  return (
    <>
      {/* <!-- Main navigation container --> */}
      <nav
        class="flex-no-wrap relative flex w-full items-center justify-between lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          {/* <!-- Logo --> */}
          <Link
            class="mb-4 mt-10 md:ms-10 me-12 flex items-center lg:mb-0"
            to="/"
          >
            <img
              src="https://res.cloudinary.com/dtqdflngh/image/upload/v1693157619/logo_u772uc.svg"
              alt="logo"
              loading="lazy"
            />
          </Link>
          {/* <!-- Collapsible navigation container --> */}
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            {/* <!-- Left navigation links --> */}
            <ul
              class="list-style-none mr-auto flex flex-col mt-[51px] lg:flex-row text-white font-bold text-sm gap-4"
              data-te-navbar-nav-ref
            >
              {/* <!-- Our team link --> */}
              <li class="mb-4 md:mb-0" data-te-nav-item-ref>
                <Link class="nav-link" to="/" data-te-nav-link-ref>
                  Our team
                </Link>
              </li>
              {/* <!-- Tokens link --> */}
              <li class="mb-4 md:mb-0" data-te-nav-item-ref>
                <Link class="nav-link" to="/" data-te-nav-link-ref>
                  Tokens
                </Link>
              </li>
              {/* <!-- Connect Wallet link --> */}
              <li class="mb-4 md:mb-0" data-te-nav-item-ref>
                <Link class="nav-link" to="/" data-te-nav-link-ref>
                  Connect Wallet
                </Link>
              </li>
              {/* <!--Lightpaper link --> */}
              <li class="mb-4 md:mb-0" data-te-nav-item-ref>
                <Link class="nav-link" to="/" data-te-nav-link-ref>
                  Lightpaper
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Right elements --> */}
          <div class="hidden relative lg:flex items-center text-white font-bold text-sm pt-9 pe-10">
            <div className="mx-[10px] py-2 px-3  hover:text-gray-600 transition ease-linear delay-200">
              <Link>Sign in</Link>
            </div>
            <div className="mx-[10px] w-[147px] h-[48px] text-center border-2 border-[#22a75d] py-3 px-4 rounded-3xl hover:bg-[#22a75d] transition ease-in-out delay-200">
              <Link>Sign up</Link>
            </div>
          </div>
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            class="block border-0 bg-transparent mt-10 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
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
