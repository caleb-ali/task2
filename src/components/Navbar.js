import React from "react";
import { useState } from "react";
import homelogo from "../images/homelogo.png";
import metabnb from "../images/metabnb.png";
import metamask from "../images/metamask.png";
import walletconnect from "../images/walletconnect.png";
import { GrClose } from "react-icons/gr";
import {GrNext} from "react-icons/gr";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div >
      <nav class="flex items-center justify-between flex-wrap p-4 lg:pt-10 bg-white ">
        <div class="flex items-center lg:ml-24">
          <img class="h-6" src={homelogo} />
          <img class="h-6" src={metabnb} />
        </div>

        <div class="block lg:hidden">
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
          <div class="text-sm lg:flex-grow font-Redrose text-gray-800">
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 ml-4  lg:mr-8"
              id=""
            >
              Home
            </a>

            <a
              href="/placetostay"
              class="block mt-4 lg:inline-block lg:mt-0 ml-4 lg:mr-8"
              id=""
            >
              Place to stay
            </a>

            <a
              href="javascript:void(0)"
              class="block mt-4 lg:inline-block lg:mt-0 ml-4 lg:mr-8"
              id=""
            >
              NFTs
            </a>

            <a
              href="javascript:void(0)"
              class="block mt-4 lg:inline-block lg:mt-0 ml-4"
              id=""
            >
              Community
            </a>
          </div>
          <div>
            <a
              href="#"
              onClick={toggleModal}
              class="inline-block text-sm px-4 py-2 leading-none rounded mt-4 lg:mt-0 lg:mr-24 ml-4 bg-hibiscus-500 hover:bg-hibiscus-600 text-white font-normal font-Redrose"
            >
              connect wallet
            </a>
          </div>
        </div>
      </nav>
      <div>
        {modal && (
          <div class="  border absolute rounded bg-white lg:w-1/3   divide-y lg:ml-56">
            <div class="flex flex-row m-4">
              <p class="self-center">Connect Wallet</p>
              <span onClick={toggleModal} class="self-center absolute right-12" >
                < GrClose />
              </span>
              
            </div>
            <div class="flex flex-col ">
              <div class="m-4">
              <h4>choose your preferred wallet</h4>
              <a class="flex flex-row border rounded mt-4 p-1">
                <img src={metamask} class="self-center"/>
                <span class="self-center">Metamask</span>
                <span class="self-center absolute right-12 "><GrNext/></span>
              </a>
              <a class="flex flex-row border rounded mt-4 p-1">
                <img src={walletconnect} class="self-center"/>
                <span class="self-center">WalletConnect</span>
                <span class="self-center absolute right-12"><GrNext/></span>
              </a>
              </div>
            </div>
          </div>
        
        )}
      </div>
    </div>
  );
};

export default Navbar;
