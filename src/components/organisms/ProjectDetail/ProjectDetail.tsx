import React from "react";

import { Button, CustomImage, Text } from "@atoms";
import { DoubleTextContainer } from "@molecules";

import Try from "./../../../assets/img/try.jpg";

export const ProjectDetail = ({ data }: { data: any }) => {
  const ProjectSimpleDate = [
    {
      TextOne: "Time Frame",
      TextTwo: "Dec 2023 - Jan 2024",
    },
    {
      TextOne: "Technology",
      TextTwo: "NextJs, Tailwind Css",
    },
    {
      TextOne: "Category",
      TextTwo: "Frontend",
    },
  ];

  const ToolType = [
    {
      selectType: "All",
    },
    {
      selectType: "Language",
    },
    {
      selectType: "Library",
    },
  ];

  const Tool = [
    {
      title: "About",
    },
    {
      title: "Resume",
    },
    {
      title: "Projects",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <>
      {/* Heading */}
      <div className="py-14 mt-10 bg-[#FFF]">
        <div className="text-center">
          <Text
            text={"Project"}
            textSize={"lg:text-9xl md:text-7xl text-4xl "}
            textColor={"text-[#1c2528]"}
            fontFamily="font-[Sorts Mill Goudy]"
          />
        </div>
      </div>

      {/* Simple details */}
      <div className="bg-[#ebe7e0] dark:bg-[#6c757d] py-14 w-full flex justify-center items-center">
        <div className="content-center ">
          <div className=" lg:border-l-2 lg:border-gray-500 p-10 ">
            <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:gap-20 ">
              {ProjectSimpleDate.map((item, key) => (
                <DoubleTextContainer
                  key={key}
                  textContainerOne={item.TextOne}
                  textContainerOneSize={"text-xl"}
                  textContainerOneColor={"text-[#3c4649]"}
                  textContainerTwo={item.TextTwo}
                  textContainerTwoSize={"text-xl"}
                  textContainerTwoColor={"text-[#1c2528]"}
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
        <CustomImage src={Try} alt={"Sun"} padding=" h-full w-full" />
      </div>

      {/* Detail with small images */}
      <div className="bg-[#ebe7e0] dark:bg-[#6c757d] py-14 w-full flex flex-col justify-center items-center gap-20">
        <Text
          text={"Project Summary"}
          textSize={"lg:text-7xl md:text-4xl text-2xl "}
          textColor={"text-[#1c2528]"}
          fontFamily="font-[Sorts Mill Goudy]"
        />
        <div className="lg:max-w-[950px] mx-10">
          <Text
            text={
              "I'm a recent Software Engineering graduate with a passion for frontend development. Skilled in HTML, CSS, Bootstrap, JavaScript, and SEO, I transform design concepts into user-friendly websites. I'm dedicated to continuous learning and eager to collaborate on exciting web projects. "
            }
            padding="mb-10"
          />
        </div>
        <div className="flex flex-wrap justify-center max-w-[1000px] gap-20 mx-auto">
          <CustomImage
            src={Try}
            alt={"Project Image"}
            height={350}
            width={200}
          />
          <CustomImage
            src={Try}
            alt={"Project Image"}
            height={350}
            width={200}
          />
          <CustomImage
            src={Try}
            alt={"Project Image"}
            height={350}
            width={200}
          />
          <CustomImage
            src={Try}
            alt={"Project Image"}
            height={350}
            width={200}
          />
        </div>
      </div>

      {/* Language and tools used */}
      <div className="py-14 mt-10 bg-[#FFF] flex justify-center items-center">
        <div className="text-center">
          <Text
            text={"Tools"}
            textSize={"lg:text-9xl md:text-7xl text-4xl "}
            textColor={"text-[#1c2528]"}
            fontFamily="font-[Sorts Mill Goudy]"
          />
          <div className="lg:max-w-[800px] m-10 flex Fivess:place-content-around justify-center items-center align-middle Fivess:flex-row flex-col Fivess:gap-20">
            {ToolType.map((item, key) => {
              return (
                <div className="" key={key}>
                  <Button
                    buttonBackgroundColor="bg-none"
                    buttonInsideText={item.selectType}
                    buttonInsideTextColor="text-black"
                    buttonInsideTextSize="lg:text-4xl md:text-2xl Fivess:text-lg text-2xl"
                    buttonInsideFontWeight="font-bold"
                    buttonRadius="rounded-none border-[#ebe7e0] border-b-4"
                    hoverStyle="hover:border-b-4 hover:border-[#ff8059]"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            {Tool.map((item, key) => (
              <div key={key}>
                <Text
                  text={item.title}
                  textColor={"text-[#1c2528]"}
                  textSize={"text-xl"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
