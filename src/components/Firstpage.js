import React from "react";
import img1 from "../images/imgb1.png";
import img2 from "../images/imgb2.png";
import img3 from "../images/imgb3.png";
import img4 from "../images/imgb4.png";
import img11 from "../images/9img11.png";
import img12 from "../images/7img12.png";
import img13 from "../images/8img13.png";
import btmimg from "../images/btmimg.png";
import star from "../images/star.png";
import { dataone } from "./Data";


const Firstpage = () => {
  return (
    <div>
      <div class="flex flex-row lg:ml-24">
        <div class="lg:mt-44">
          <h2 class="font-Redrose lg:text-5xl">
            Rent a <span class="text-hibiscus font-bold">Place</span> away from
          </h2>
          <h2 class="font-Redrose lg:text-5xl mt-4">
            <span class="text-hibiscus font-bold">Home</span> in the{" "}
            <span class="text-hibiscus font-bold">Metaverse</span>
          </h2>
          <p class="font-Redrose font-normal lg:text-xl lg:mt-16">
            we provide you access to luxury and affordable houses <br></br>in
            the metaverse, get a chance to turn your <br></br>imagination to
            reality at your comfort zone
          </p>
          <div class="flex items-center lg:mt-16">
            <div class="flex  border rounded-md">
              <input
                type="text"
                class="px-4 py-2 w-80 "
                placeholder="Search for location"
              ></input>
              <button class=" px-4 w-56 bg-hibiscus-500 hover:bg-hibiscus-600 text-white font-Redrose ">
                Search
              </button>
            </div>
          </div>
        </div>
        <div class="flex invisible lg:visible lg:ml-32 lg:mt-24">
          <div class="mt-32 ">
            <img class="" src={img1} />
            <img class="mt-4" src={img2} />
          </div>
          <div class="mt-8 ml-4">
            <img class="" src={img3} />
            <img class="mt-4" src={img4} />
          </div>
        </div>
      </div>
      <img class="mt-20 w-100" src={btmimg} />
      <section class="m-16">
        <div class="">
          <h2 class="font-Redrose lg:text-4xl place-items-center grid ">
            Inspiration for your next adventure
          </h2>
        </div>

        {/* card begins */}
        <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 font-Redrose font-normal">
          {dataone.map((post) => (
            <div key={post.id}>
              <div class="p-4 border my-4 rounded-lg border-gray duration-300 hover:-translate-y-1">
                <img src={post.photo} class="w-full" />
                <div>
                  <div class="flex justify-between text-xs mt-4">
                    <span>Desert King</span>
                    <span class="font-bold">1MBT per night</span>
                  </div>
                  <div class="flex justify-between text-xs mt-4">
                    <span>2345km away</span>
                    <span>available for 2weeks stay</span>
                  </div>
                  <div class="mt-2">
                    <span>
                      <img src={star} class="inline-block w-3 h-3 " />
                      <img src={star} class="inline-block w-3 h-3 ml-2" />
                      <img src={star} class="inline-block w-3 h-3 ml-2" />
                      <img src={star} class="inline-block w-3 h-3 ml-2" />
                      <img src={star} class="inline-block w-3 h-3 ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*card ends here*/}
      </section>
      <div class="flex pb-56 justify-between flex-row bg-hibiscus-500 ">
        <div class="text-white m-12">
          <h2 class="lg:text-3xl font-bold">Metabnb NFTs</h2>
          <p class="mt-12">
            Discover our NFT gift cards collection. Loyal <br/> 
            customers get amazing gift cards which are <br/>
            traded as NFTs. These NFTs give our customers <br/>
            access to loads of our exclusve services 
          </p>
          <button
            href="#"
            class="mt-12 text-sm px-4 py-2 rounded  bg-white  text-hibiscus font-normal font-Redrose"
          >
            Learn more
          </button>
        </div>
        <div class=" w-1/2 relative mt-16 mr-16 flex justify-center invisible lg:visible ">
          <img src={img11} class="z-0  absolute "/>
          <img src={img12} class="z-10 absolute mt-20"/>
          <img src={img13} class="z-20  absolute mt-20"/>
        </div>
      </div>
      
    </div>
  );
};

export default Firstpage;
