import React from "react";
import { inherits } from "util";

function CompanyBanner() {
  return (
    <div className="flex flex-col p-8 mx-auto items-center w-full max-x-[1440px]">
      <p className="text-base font-normal mb-8 text-center">
        Trusted by 100,000+ users and teams of all sizes.
      </p>
      <ul className="flex w-full flex-wrap justify-center items-start justify-items-center -mr-14 -mb-10">
        <li className="mr-14 mb-10 opacity-60">
          <img src="/bbc.webp" alt="bbc" width={115} height={40} />
        </li>
        <li className="mr-14 mb-10 opacity-60">
          <img src="/forbes.webp" alt="forbes" width={115} height={40} />
        </li>
        <li className="mr-14 mb-10 opacity-60">
          <img src="/spotify.webp" alt="spotify" width={115} height={40} />
        </li>
        <li className="mr-14 mb-10 opacity-60">
          <img src="/un.webp" alt="un" width={115} height={40} />
        </li>
        <li className="mr-14 mb-10 opacity-60">
          <img src="/dpa.webp" alt="dpa" width={115} height={40} />
        </li>
        <li className="mr-14 mb-10 opacity-60">
          <img src="/rtc.webp" alt="rtc" width={115} height={40} />
        </li>
      </ul>
    </div>
  );
}

export default CompanyBanner;
