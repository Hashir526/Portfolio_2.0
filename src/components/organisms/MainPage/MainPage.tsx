import React from "react";

import { Button, CustomImage, Text } from "@atoms";

import { DoubleTextContainer } from "@molecules";

import Sun from "./../../../assets/svg/Sun.svg";
import Linkedin from "./../../../assets/svg/Linkedin.svg";
import Github from "./../../../assets/svg/Github.svg";
import Check from "././../../../assets/svg/Check.svg";

export const MainPage = () => {
  const BornExpDate = [
    {
      TextOne: "Born in",
      TextTwo: "Islamabad",
    },
    {
      TextOne: "Experience",
      TextTwo: "6+ months",
    },
    {
      TextOne: "Date of Birth",
      TextTwo: "8th Jan 2001",
    },
  ];

  return (
    <>
      {/* Name and Pic ~ White BG */}
      <div className="bg-white py-14 ">
        <div className="w-full flex justify-center ">
          <div className="max-w-[570px] place-items-center">
            <DoubleTextContainer
              textContainerOne={"FrontEnd Developer"}
              textContainerOneSize={"text-4xl"}
              textContainerOneColor={"font-sans"}
              textContainerOneFontWeight={"text-[#3c4649]"}
              textContainerTwo={"Hashir Khurram"}
              textContainerTwoSize={"text-9xl"}
              textContainerTwoColor={"text-[#1c2528]"}
              textContainerTwoFontWeight={"font-sans"}
            />
            <div className="border-l-2 border-gray-500 p-7">
              <Text
                text={"I am FrontEnd Developer based in Islamabad, Pakistan."}
              />
              <div className="flex gap-2">
                <Button
                  imageSrc={Linkedin}
                  imageAlert={"Linkedin"}
                  imageHeight={34}
                />
                <Button
                  imageSrc={Github}
                  imageAlert={"Github"}
                  imageHeight={34}
                />
              </div>
            </div>
          </div>
          <CustomImage src={Sun} alt={"pic"} height={100} width={100} />
        </div>
        <div className="flex justify-evenly ">
          {BornExpDate.map((item, key) => {
            return (
              <DoubleTextContainer
                key={key}
                textContainerOne={item.TextOne}
                textContainerOneSize={"text-xl"}
                textContainerOneColor={"text-[#3c4649]"}
                textContainerTwo={item.TextTwo}
                textContainerTwoSize={"text-xl"}
                textContainerTwoColor={"text-[#1c2528]"}
                textContainerTwoFontWeight="font-bold"
              />
            );
          })}
        </div>
      </div>

      {/* About Me ~ #ebe7e0 BG */}
      <div className="bg-[#ebe7e0] py-14 w-full flex justify-center items-center">
        <div className="content-center">
          <Text
            text={"About Me"}
            textSize={"text-9xl"}
            textColor={"text-[#1c2528]"}
            fontFamily="font-[Sorts Mill Goudy]"
          />
          <div className="flex">
            <div>
              <CustomImage src={Check} alt={"Check"} height={44} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
