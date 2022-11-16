import React from "react";
import { datatwo } from "./Data";
import star from "../images/star.png";
import setting from "../images/setting.png";

const Secondpage = () => {
  return (
    <div>
      <div class="ml-16 mt-8 md:pl-28 lg:ml-20 lg:mr-40 lg:mt-20 grid grid-cols-2 gap-4 lg:flex lg:flex-row justify-between items-center font-Redrose text-gray-600">
        <span>Resturant</span>
        <span>Cottage</span>
        <span>Castle</span>
        <span>fantast city</span>
        <span>beach</span>
        <span>carbins</span>
        <span>Off-grid</span>
        <span>Farm</span>
        <div class="flex relative group justify-center items-center">
          <input
          v-model="input"
            type="text"
            placeholder="Location"
            class="flex flex-none border bg-white rounded-lg text-xs p-3"
          />
          <span class="flex absolute right-0 lg:p-2 md:p-24">
           <img src={setting} class="" />
           </span>
        </div>
      </div>
     
      <section class="m-16">
        <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 font-Redrose font-normal">
          {datatwo.map((post) => (
            <div key={post.id}>
              <div class="p-4 border my-4 rounded-lg border-gray duration-300 hover:-translate-y-1">
                <img src={post.photo} class="w-full" />
                <div class="">
                  <div class="flex justify-between text-xs mt-4 text-gray-500">
                    <span>Desert King</span>
                    <span class="font-bold text-gray-800">1MBT per night</span>
                  </div>
                  <div class="flex justify-between text-xs mt-4 text-gray-500">
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
      </section>
    </div>
  );
};

export default Secondpage;
