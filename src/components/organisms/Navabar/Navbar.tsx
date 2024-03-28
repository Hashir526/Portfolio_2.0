"use client";

import React, { useContext, useEffect, useState } from "react";

import { Button } from "@atoms";

import { Dropdown } from "@organisms";

import Sun from "./../../../assets/svg/Sun.svg";
import Moon from "./../../../assets/svg/Moon.svg";

import { DarkModeContext } from "../../../context/DarkMode/DarkModeContext";

import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const router = useRouter();

  return (
    <div className={`${darkMode ? "" : "dark"}`}>
      <nav className=" navbar fixed top-0 left-0 w-full z-10 xl:bg-transparent bg-[#e9ce9c] ">
        <div className="m-10 ">
          <div className=" float-start Fivess:block hidden">
            <Button
              buttonBackgroundColor="bg-none"
              buttonInsideText="Hashir.K"
              buttonInsideTextColor="text-black dark:text-[#FFF]"
              buttonInsideTextSize="text-4xl"
              buttonWith="w-14"
              buttonStyling={"p-2"}
              handleOnClick={() => router.push("/")}
            />
          </div>
          <div className=" flex float-end">
            <Button
              imageSrc={darkMode === true ? Moon : Sun}
              imageAlt={darkMode ? "Moon" : "Sun"}
              imageCheck={true}
              imageHeight={34}
              handleOnClick={toggleDarkMode}
            />

            <Dropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};
