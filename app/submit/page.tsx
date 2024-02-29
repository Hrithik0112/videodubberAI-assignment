"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";
import Popup from "@/components/Popup";

const API = "https://videodubber.ai/testinput";

const Submit = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState("0");

  const fetchAPI = async () => {
    const inputValues = [checked, text, sliderValue];
    const inputString = inputValues.join("");

    const payload = new URLSearchParams();
    payload.append("input", inputString);

    fetch(API, {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const resetForm = () => {
    setChecked(false);
    setText("");
    setSliderValue("0");
  };

  return (
    <div className="flex flex-col justify-center text-center p-4">
      <div className="w-fit p-2 rounded-full transition-all duration-300 hover:cursor-pointer hover:text-white hover:bg-black/75">
        <Link href="/">
          <BiLeftArrow />
        </Link>
      </div>
      <div className="w-1/2 m-auto p-8">
        {error != "" && <h1 className="font-bold text-red-700">{error}</h1>} {/* CHECKBOX */}
        <div className="form-control pt-4">
          <label className=" cursor-pointer">
            <span className="mr-5">Checkbox</span>
            <input
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              type="checkbox"
            />
          </label>
        </div>
        {/* INPUT FIELD */}
        <label className="mt-4 input input-bordered flex flex-col items-center gap-2">
          <span>Text Input</span>
          <input
            type="text"
            className="focus:scale-150 border rounded-lg"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here...."
          />
        </label>
        {/* SLIDER */}
        <input
          type="range"
          min={0}
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
          className="range mt-4"
          step="10"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>0</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>40</span>
          <span>50</span>
          <span>60</span>
          <span>70</span>
          <span>80</span>
          <span>90</span>
          <span>100</span>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <button
          onClick={() => {
            if (text === "") {
              setError("Can't leave the input field empty.");
              return;
            }
            setError("");
            fetchAPI();
            setShow(true);
          }}
          className="border-2 rounded-lg bg-blue-500 p-4 text-white"
        >
          Submit
        </button>
      </div>
      {show && (
        <Popup
          data={{ checked: checked, text: text, sliderValue: sliderValue }}
          setShow={() => {
            setShow(false);
            resetForm();
          }}
        />
      )}
    </div>
  );
};

export default Submit;
