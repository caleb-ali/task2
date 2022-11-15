import React from "react";
import { useState } from "react";
import homelogo from "../images/homelogo.png";
import metabnb from "../images/metabnb.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav class="flex items-center justify-between flex-wrap pt-4 lg:pt-10 bg-white ">
      <div class="flex items-center  mr-16 ml-4 lg:ml-24">
        <img class="h-6" src={homelogo} />
        <img class="h-6" src={metabnb} />
      </div>

      <div class="block mr-4 md:hidden">
        <button
          class=" text-hibiscus-600 rounded-md outline-none focus:border-hibiscus-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        class={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-48 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <div class="text-sm lg:flex-grow font-Redrose">
          <a
            href="javascript:void(0)"
            class="block mt-4 lg:inline-block lg:mt-0 ml-4 lg:mr-8"
          >
            Home
          </a>

          <a
            href="javascript:void(0)"
            class="block mt-4 lg:inline-block lg:mt-0 ml-4 lg:mr-8"
          >
            Place to stay
          </a>

          <a
            href="javascript:void(0)"
            class="block mt-4 lg:inline-block lg:mt-0 ml-4 lg:mr-8"
          >
            NFTs
          </a>

          <a
            href="javascript:void(0)"
            class="block mt-4 lg:inline-block lg:mt-0 ml-4"
          >
            Community
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none rounded mt-4 lg:mt-0 lg:mr-24 ml-4 bg-hibiscus-500 hover:bg-hibiscus-600 text-white font-normal font-Redrose"
          >
            connect wallet
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
