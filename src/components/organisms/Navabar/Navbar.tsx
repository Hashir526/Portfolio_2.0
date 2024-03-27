"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@atoms";

import { Dropdown } from "@organisms";

import Sun from "./../../../assets/svg/Sun.svg";
import Moon from "./../../../assets/svg/Moon.svg";

export const Navbar = () => {
  const [darkModeSelect, setDarkModeSelect] = useState<Boolean>(false);

  const toggle = () => {
    // const newMode = !darkModeSelect ? "dark" : "light";
    setDarkModeSelect(!darkModeSelect);
    localStorage.setItem("Mode", String(darkModeSelect));
    // localStorage.setItem("Mode", newMode);
  };

  // useEffect(() => {
  //   const mode = localStorage.getItem("Mode");
  //   if (mode) {
  //     setDarkModeSelect(mode === "dark");
  //   }
  // }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-10 xl:bg-transparent bg-[#e9ce9c] ">
      <div className="m-10">
        <div className=" float-start">
          <Button
            buttonBackgroundColor="bg-none"
            buttonInsideText="Hashir.K"
            buttonInsideTextColor="text-black"
            buttonInsideTextSize="text-4xl"
            buttonWith="w-14"
            buttonStyling={"p-2"}
          />
        </div>
        <div className=" flex float-end">
          <Button
            imageSrc={darkModeSelect === true ? Moon : Sun}
            imageAlt={darkModeSelect ? "Moon" : "Sun"}
            imageCheck={true}
            imageHeight={34}
            handleOnClick={() => toggle()}
          />

          <Dropdown />
        </div>
      </div>
    </nav>
  );
};
