import React from "react";
import footerhouse from "../images/footerhouse.png";
import footermetabnb from "../images/footermetabnb.png";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import tw from "../images/tw.png";

const Footer = () => {
  return (
    <div class=" bg-black text-white font-Redrose lg:pl-12">
      <div class="flex flex-col lg:flex-row p-8 pl-16 ">
        <div class="flex flex-col basis-1/4">
          <div class="flex flex-row ">
            <img src={footerhouse} />
            <img src={footermetabnb} />
          </div>
          <div class="flex flex- mt-8">
            <img src={fb} />
            <img src={ig} class="ml-8"/>
            <img src={tw} class="ml-8"/>
          </div>

          <div class="mt-8">© 2022 Metabnb</div>
        </div>
        <div class="mt-6 flex flex-col basis-1/4">
          <span>Community</span>
          <span>NFT</span>
          <span>Tokens</span>
          <span>Landlords</span>
          <span>Discord</span>
        </div>
        <div class="mt-6 flex flex-col basis-1/4">
          <span>Places</span>
          <span>Castle</span>
          <span>Farms</span>
          <span>Beach</span>
          <span>Learn More</span>
        </div>
        <div class="mt-6 flex flex-col basis-1/4">
          <span>About us</span>
          <span>Road map</span>
          <span>Creators</span>
          <span>Career</span>
          <span>Contact us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
