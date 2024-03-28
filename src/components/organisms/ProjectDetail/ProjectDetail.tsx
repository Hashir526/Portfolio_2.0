"use client";
import React, { useContext } from "react";

import { useSearchParams } from "next/navigation";

import { Button, CustomImage, Text } from "@atoms";
import { DoubleTextContainer } from "@molecules";

import Try from "./../../../assets/img/try.jpg";

import { DarkModeContext } from "../../../context/DarkMode/DarkModeContext";
import { ProjectDataContext } from "../../../context/ProjectData/ProjectDataContext";

export const ProjectDetail = () => {
  const { darkMode } = useContext(DarkModeContext);

  const { data } = useContext(ProjectDataContext);

  return (
    <div className={darkMode ? "" : "dark"}>
      {/* Heading */}
      <div className="pb-14 pt-24 bg-[#FFF] dark:bg-[#181e27]">
        <div className="text-center">
          <Text
            text={data?.projectName}
            textSize={"lg:text-9xl md:text-7xl text-4xl "}
            textColor={"text-[#1c2528] dark:text-[#FFF]"}
            fontFamily="font-[Sorts Mill Goudy]"
          />
        </div>
      </div>

      {/* Simple details */}
      <div className="bg-[#ebe7e0] dark:bg-[#222A36] py-14 w-full flex justify-center items-center">
        <div className="content-center ">
          <div className=" lg:border-l-2 lg:border-gray-500 p-10 ">
            <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:gap-20 ">
              {data?.children.ProjectSimpleDate.map((item: any, key: any) => (
                <DoubleTextContainer
                  key={key}
                  textContainerOne={item.TextOne}
                  textContainerOneSize={"text-xl"}
                  textContainerOneColor={"text-[#3c4649] dark:text-[#bdc1c7]"}
                  textContainerTwo={item.TextTwo}
                  textContainerTwoSize={"text-xl"}
                  textContainerTwoColor={"text-[#1c2528] dark:text-[#FFF]"}
                  textContainerTwoFontWeight="font-bold"
                  textContainerPadding="mt-3 md:mt-0 md:ml-6"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="">
        <CustomImage src={data?.image} alt={"Sun"} padding=" h-full w-full" />
      </div>

      {/* Detail with small images */}
      <div className="bg-[#ebe7e0] dark:bg-[#222A36] py-14 w-full flex flex-col justify-center items-center gap-20">
        <Text
          text={"Project Summary"}
          textSize={"lg:text-7xl md:text-4xl text-2xl "}
          textColor={"text-[#1c2528] dark:text-[#FFF]"}
          fontFamily="font-[Sorts Mill Goudy]"
        />
        <div className="lg:max-w-[950px] mx-10">
          <Text text={data?.summary} padding="mb-10" />
        </div>
        <div className="flex flex-wrap justify-center max-w-[1000px] gap-20 mx-auto">
          {data?.children.images.map((item: any, key: any) => {
            return (
              <div className="" key={key}>
                <CustomImage
                  src={item.src}
                  alt={"Project Image"}
                  height={350}
                  width={200}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Language and tools used */}
      <div className="py-14  bg-[#FFF] dark:bg-[#181e27] flex justify-center items-center">
        <div className="text-center">
          <Text
            text={"Tools"}
            textSize={"lg:text-9xl md:text-7xl text-4xl "}
            textColor={"text-[#1c2528] dark:text-[#FFF]"}
            fontFamily="font-[Sorts Mill Goudy]"
          />
          <div className="lg:max-w-[800px] m-10 flex Fivess:place-content-around justify-center items-center align-middle Fivess:flex-row flex-col Fivess:gap-20">
            {data?.children.ToolType.map((item: any, key: any) => {
              return (
                <div className="" key={key}>
                  <Button
                    buttonBackgroundColor="bg-none"
                    buttonInsideText={item.selectType}
                    buttonInsideTextColor="text-black dark:text-[#FFF]"
                    buttonInsideTextSize="lg:text-4xl md:text-2xl Fivess:text-lg text-2xl"
                    buttonInsideFontWeight="font-bold"
                    buttonRadius="rounded-none border-[#ebe7e0] dark:border-[#181e27] border-b-4"
                    hoverStyle="hover:border-b-4 hover:border-[#ff8059]"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex sm:flex-row flex-col  justify-center items-center gap-16">
            {data?.children.Tool.map((item: any, key: any) => (
              <div key={key}>
                <Text
                  text={item.title}
                  textColor={"text-[#1c2528] dark:text-[#bdc1c7]"}
                  textSize={"md:text-3xl text-xl"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
