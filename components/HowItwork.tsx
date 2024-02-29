import React from "react";

const data = [
  {
    id: 1,
    name: "Upload",
    desc: "Upload your French videos, your URLs, or pull from Youtube, Vimeo, Drive, and more.",
    clr: "red",
  },
  {
    id: 2,
    name: "Create & Translate.",
    desc: "A subtitler will create the original (French) subtitles. A English subtitle translator will translate the subtitles.",
    clr: "blue",
  },
  {
    id: 3,
    name: "Download.",
    desc: "Your file will appear on your dashboard with the perfect English subtitles.",
    clr: "green",
  },
];

function HowItwork() {
  return (
    <div className="w-full max-x-[1440px]  flex justify-center items-start mx-auto px-8 py-16">
      <div className="flex flex-col w-full items-center ">
        <h2 className="text-center mb-16 font-semibold text-3xl">How does it work?</h2>
        <ul className="flex flex-wrap justify-center justify-items-center items-start -mr-8 -mb-8">
          {data.map((item: any) => (
            <li
              className="w-[360px] min-h-[188px] max-w-full p-8 border-2 border-gray-400 rounded-lg flex flex-col gap-4 "
              key={item.id}
            >
              <p className="font-bold text-xl mb-4">
                <span
                  className="p-2 text-white border rounded-lg"
                  style={{ backgroundColor: `${item.clr}` }}
                >
                  {item.id}
                </span>
                - {item.name}
              </p>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HowItwork;
