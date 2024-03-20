"use client";

import React, { useState } from "react";

import { Button } from "@atoms";

import Bar from "./../../../assets/svg/Bar.svg";
import Sun from "./../../../assets/svg/Sun.svg";
import Moon from "./../../../assets/svg/Moon.svg";

export const Navbar = () => {
  const [darkModeSelect, setDarkModeSelect] = useState<Boolean>(false);

  const toggle = () => {
    setDarkModeSelect(!darkModeSelect);
  };

  return (
    <div className="p-10 ">
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
          imageAlert={darkModeSelect ? "Moon" : "Sun"}
          imageHeight={34}
          handleOnClick={() => toggle()}
        />
        <Button imageSrc={Bar} imageAlert={"Bar"} imageHeight={34} />
      </div>
    </div>
  );
};