import React from "react";
import Button from "./Button";
import StarRating from "./StarRating";

function Review() {
  const rating = 4;
  const customFillColor = "#f8c41c";
  return (
    <div className="w-full max-x-[1440px]  flex flex-col items-center mx-auto px-8 py-16">
      <span className="font-semibold text-4xl mb-8">Customer Reviews</span>
      <div className="flex justify-center items-center mb-12">
        <p className="font-normal text-base ">
          Rated <span className="font-bold">4.8/5</span> based on 850+ reviews
        </p>
      </div>
      <ul className="grid grid-cols-2 auto-rows-auto gap-4 mb-8">
        <li className="flex flex-col max-w-[520px] border-2 rounded-lg px-6 py-4">
          <div className="mb-4 flex justify-between items-start">
            <div className="text-lg font-semibold">Subtitle newbies delivered results</div>
            <StarRating totalStars={5} rating={rating} fillColor={customFillColor} />
          </div>
          <div className="mb-4 text-base font-normal">
            Our youth tech program produced a video series that required subtitles, and in a very
            short amount of time our inexperienced team easily delivered results thanks to Happy
            Scribe.
          </div>
          <div className="mt-auto text-base font-normal">Tanya Malcolm - Trustpilot</div>
        </li>
        <li className="flex flex-col max-w-[520px] border-2 rounded-lg px-6 py-4">
          <div className="mb-4 flex justify-between items-start">
            <div className="text-lg font-semibold">This is Excellent platform</div>
            <StarRating totalStars={5} rating={rating} fillColor={customFillColor} />
          </div>
          <div className="mb-4 text-base font-normal">
            This is Excellent platform, I recommend it
          </div>
          <div className="mt-auto text-base font-normal">Zafar Ahmed - Trustpilot</div>
        </li>
        <li className="flex flex-col max-w-[520px] border-2 rounded-lg px-6 py-4">
          <div className="mb-4 flex justify-between items-start">
            <div className="text-lg font-semibold">if you are an author</div>
            <StarRating totalStars={5} rating={rating} fillColor={customFillColor} />
          </div>
          <div className="mb-4 text-base font-normal">if you are an author, you'll love it</div>
          <div className="mt-auto text-base font-normal">Alessandro - Trustpilot</div>
        </li>
        <li className="flex flex-col max-w-[520px] border-2 rounded-lg px-6 py-4">
          <div className="mb-4 flex justify-between items-start">
            <div className="text-lg font-semibold">Very useful tool for transcribing…</div>
            <StarRating totalStars={5} rating={rating} fillColor={customFillColor} />
          </div>
          <div className="mb-4 text-base font-normal">
            Very useful tool for transcribing interviews! This website makes life a little easier
            when you have to transcribe many interviews!
          </div>
          <div className="mt-auto text-base font-normal">Romy - Trustpilot</div>
        </li>
      </ul>
      <a className="mb-8 text-lg font-normal hover:underline">See all reviews</a>
      <Button onClick={() => {}}>Get started</Button>
    </div>
  );
}

export default Review;
