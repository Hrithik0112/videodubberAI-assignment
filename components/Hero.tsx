"use client";

import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import StarRating from "./StarRating";

function Hero() {
  const rating = 4.8;
  const customFillColor = "#f8c41c";
  return (
    <div className="w-full max-w-[1440px] h-max mx-auto flex flex-col justify-center items-center relative px-8 pt-20 pb-16">
      {/* i st picture */}
      {/* banner */}
      <div className="flex justify-center items-center mb-8">
        <span className="fi fi-fr mr-4 text-[48px] relative w-5 object-contain border rounded-lg"></span>
        <FaArrowRightLong className="text-[48px] leading-[56px] font-semibold mr-4" />
        <span className="fi fi-us  text-[48px] relative w-5 object-contain border rounded-lg"></span>
      </div>
      {/* heading */}
      <h1 className="text-[64px] leading-[64px] font-semibold mb-8 text-center w-[650px] max-w-full text-wrap">
        French video with English subtitles
      </h1>
      {/* sub heading */}
      <p className="text-[18px] leading-[20px] font-normal w-[520px] max-w-full text-center text-wrap mb-8">
        Want your videos to reach a wider audience who speaks English? This service is ideal for
        your audiovisual content - from online videos, television shows, films, documentaries,
        marketing content and more!
      </p>
      {/* call to action */}
      <Button onClick={() => {}}>Get started</Button>
      <div className="flex mb-8">
        <img src="/spring.svg" alt="spring" />
        <img src="/winter.svg" alt="winter" />
      </div>

      <div className="flex flex-col text-center justify-center items-center ">
        <span className="mb-1">
          <StarRating totalStars={5} rating={rating} fillColor={customFillColor} />
        </span>
        <p className="font-normal text-base ">
          Rated <span className="font-bold">4.8/5</span> based on 850+ reviews
        </p>
      </div>

      {/* 2nd picture */}
    </div>
  );
}

export default Hero;
