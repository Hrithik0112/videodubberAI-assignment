import React from "react";
import Button from "./Button";

function Features() {
  return (
    <div className="w-full max-x-[1440px]  flex flex-col items-center mx-auto px-8 py-16">
      <div className=" flex flex-col mb-16 items-center w-full">
        <h1 className="font-semibold text-4xl">Features</h1>
      </div>
      <div className="flex justify-center items-center w-full mb-32">
        <img src="/feature.webp" alt="feature" />
      </div>
      <div className="mb-16 flex flex-col w-full">
        <div className="1 flex justify-between items-center mb-16 ">
          <div className="flex flex-col w-[480px]">
            <h3 className="mb-8 text-4xl font-semibold">100% Human Translation Customization</h3>
            <p className="text-[18px] font-normal">
              All your translations are done by one of our French to English subtitle translators to
              ensure the absolute highest quality. No machines are used here, just the talents and
              abilities of our translators.
            </p>
          </div>
          <img src="/translate.jpg" alt="trasnlate" className="max-w-[560px] h-auto w-1/2 " />
        </div>
        <div className="2 flex justify-between items-center mb-16 ">
          <img src="/format.jpg" alt="format" className="max-w-[560px] h-auto w-1/2 " />
          <div className="flex flex-col w-[480px]">
            <h3 className="mb-8 text-4xl font-semibold">Format & Hardcode Subtitles</h3>
            <p className="text-[18px] font-normal">
              Once your subtitles have been translated, you can format your subtitles to make them
              match your brand. You can select multiple settings and get your video ready to
              publish. You can also directly download the video with burned-in subtitles.
            </p>
          </div>
        </div>
        <div className="3 flex justify-between items-center mb-16">
          <div className="flex flex-col w-[480px]">
            <h3 className="mb-8 text-4xl font-semibold">Subtitle Customization</h3>
            <p className="text-[18px] font-normal">
              Our translation experts take care of the translation and making sure that your
              subtitles look pretty. But even then you can still decide how your subtitles are going
              to look with our line, CPL, and CPS management.
            </p>
          </div>
          <img src="/subtitle.jpg" alt="subtitle" className="max-w-[560px] h-auto w-1/2 " />
        </div>
      </div>
      <Button onClick={() => {}}>Get started</Button>
    </div>
  );
}

export default Features;
