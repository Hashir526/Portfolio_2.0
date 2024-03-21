import React from "react";

import { Button, CustomImage, Text } from "@atoms";

import {
  DoubleTextContainer,
  SideInfo,
  SkillInfoContainer,
  TripleTextContainer,
} from "@molecules";

import Sun from "./../../../assets/svg/Sun.svg";
import Linkedin from "./../../../assets/svg/Linkedin.svg";
import Github from "./../../../assets/svg/Github.svg";
import Check from "././../../../assets/svg/Check.svg";
import Work from "./../../../assets/svg/Work.svg";

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

  const AboutSideData = [
    {
      icon: Work,
      data: "10",
      text: "Project Worked",
    },
    {
      icon: Check,
      data: "5",
      text: "Project Completed",
    },
  ];

  const Skills = [
    {
      language: "React Js",
      grip: 6,
    },
    {
      language: "Next Js",
      grip: 6,
    },
    {
      language: "Javascript",
      grip: 6,
    },
    {
      language: "HTML",
      grip: 6,
    },
    {
      language: "CSS",
      grip: 6,
    },
  ];

  const EducationData = [
    {
      startTime: "2019",
      endTime: "2023",
      degree: "Bachelors in Software Engineering",
      institute: "Comsat University",
    },
    {
      startTime: "2019",
      endTime: "2023",
      degree: "Bachelors in Software Engineering",
      institute: "Comsat University",
    },
  ];

  const WorkExperience = [
    {
      startTime: "Sept, 2023",
      endTime: "Current",
      institute: "Rapidev",
      position: "Jr. Frontend Developer",
      detail: "ddddd",
    },
    {
      startTime: "Aug, 2021",
      endTime: "Sept, 2021",
      institute: "Asterisk",
      position: "Frontend Intern",
      detail: "ddddd",
    },
  ];

  const Course = [
    {
      startTime: "2019",
      endTime: "2023",
      degree: "Bachelors in Software Engineering",
      institute: "Comsat University",
    },
    {
      startTime: "2019",
      endTime: "2023",
      degree: "Bachelors in Software Engineering",
      institute: "Comsat University",
    },
  ];

  return (
    <>
      {/* Name and Pic ~ White BG */}
      <div className="bg-white py-14 mt-10">
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
        <div className="content-center ">
          <Text
            text={"About Me"}
            textSize={"text-9xl"}
            textColor={"text-[#1c2528]"}
            fontFamily="font-[Sorts Mill Goudy]"
          />
          <div className="flex py-10">
            <div className="max-w-[140px] ">
              {AboutSideData.map((item, key) => {
                return (
                  <div key={key}>
                    <SideInfo
                      icon={item.icon}
                      data={item.data}
                      text={item.text}
                    />
                  </div>
                );
              })}
            </div>
            <div className="max-w-[750px] border-l-2 border-gray-500 p-10 ">
              <Text
                text={
                  "I'm a recent Software Engineering graduate with a passion for frontend development. Skilled in HTML, CSS, Bootstrap, JavaScript, and SEO, I transform design concepts into user-friendly websites. I'm dedicated to continuous learning and eager to collaborate on exciting web projects. "
                }
              />
              <Button
                buttonBackgroundColor="bg-none hover:bg-[#ff8059] text-[#1c2528] hover:text-[#FFF] "
                buttonBorderColor="border-2 border-[#ff8059]"
                hoverStyle="transition-all duration-500 ease-in-out"
                padding="my-4"
                buttonWith="w-44"
                buttonInsideText="Contact Me"
                buttonInsideFontWeight="font-bold"
                buttonInsideTextColor=" "
                buttonInsideTextSize="text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* My Resume ~ White BG*/}
      <div className="bg-[#FFF] py-14 w-full flex justify-center items-center">
        <div className="content-center ">
          <Text
            text={"My Resume"}
            textSize={"text-9xl"}
            textColor={"text-[#1c2528]"}
            fontFamily="font-[Sorts Mill Goudy]"
          />
          <div className="max-w-[1000px] border-l-2 border-gray-500 p-8 my-10 ">
            <div className="p-7 mb-10">
              <Text
                text={
                  "Talented UX designer with 7+ years of experience, seeking to elevate UI/UX at ABC, Inc. As Lead UI/UX Head completed project before dead line. ittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euism od leo um, at pellentesque velituis a congue sem."
                }
              />
            </div>
            <div className="p-7">
              <Text
                text={"SKILLS"}
                textSize={"text-4xl"}
                fontWeight="font-bold"
                textColor={"text-[#1c2528]"}
                padding="pb-10"
              />
              {Skills.map((item, key) => {
                return (
                  <div
                    className="flex items-center my-4 justify-between"
                    key={key}
                  >
                    <SkillInfoContainer
                      language={item.language}
                      grip={item.grip}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex p-7">
              <div className="flex gap-48 flex-wrap">
                <div>
                  <div className="">
                    <Text
                      text={"Education"}
                      textSize={"text-4xl"}
                      fontWeight="font-bold"
                      textColor={"text-[#1c2528]"}
                      padding="pb-10"
                    />
                    {EducationData.map((item, key) => {
                      return (
                        <div className="mb-12" key={key}>
                          <TripleTextContainer
                            textContainerOne={`${item.startTime}-${item.endTime}`}
                            textContainerOneSize={"text-xl"}
                            textContainerOneColor={"text-[#3c4649]"}
                            textContainerTwo={item.degree}
                            textContainerTwoSize={"text-2xl"}
                            textContainerTwoColor={"text-[#1c2528]"}
                            textContainerTwoFontWeight="font-bold"
                            textContainerThree={item.institute}
                            textContainerThreeSize={"text-xl"}
                            textContainerThreeColor={"text-[#3c4649]"}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="">
                    <Text
                      text={"Course"}
                      textSize={"text-4xl"}
                      fontWeight="font-bold"
                      textColor={"text-[#1c2528]"}
                      padding="pb-10"
                    />
                    {Course.map((item, key) => {
                      return (
                        <div className="mb-12" key={key}>
                          <TripleTextContainer
                            textContainerOne={`${item.startTime}-${item.endTime}`}
                            textContainerOneSize={"text-xl"}
                            textContainerOneColor={"text-[#3c4649]"}
                            textContainerTwo={item.degree}
                            textContainerTwoSize={"text-2xl"}
                            textContainerTwoColor={"text-[#1c2528]"}
                            textContainerTwoFontWeight="font-bold"
                            textContainerThree={item.institute}
                            textContainerThreeSize={"text-xl"}
                            textContainerThreeColor={"text-[#3c4649]"}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div>
                    <Text
                      text={"Experience"}
                      textSize={"text-4xl"}
                      fontWeight="font-bold"
                      textColor={"text-[#1c2528]"}
                      padding="pb-10"
                    />
                    {WorkExperience.map((item, key) => {
                      return (
                        <div key={key}>
                          <TripleTextContainer
                            textContainerOne={`${item.startTime}-${item.endTime}`}
                            textContainerOneSize={"text-xl"}
                            textContainerOneColor={"text-[#3c4649]"}
                            textContainerTwo={item.institute}
                            textContainerTwoSize={"text-2xl"}
                            textContainerTwoColor={"text-[#1c2528]"}
                            textContainerTwoFontWeight="font-bold"
                            textContainerThree={item.position}
                            textContainerThreeSize={"text-xl"}
                            textContainerThreeColor={"text-[#3c4649]"}
                          />
                          <Text
                            text={item.detail}
                            textSize={"text-xl"}
                            textColor={"text-[#1c2528]"}
                            padding="mt-4 mb-12"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Button
              buttonBackgroundColor="bg-none hover:bg-[#ff8059] text-[#1c2528] hover:text-[#FFF] "
              buttonBorderColor="border-2 border-[#ff8059]"
              hoverStyle="transition-all duration-500 ease-in-out"
              padding="ml-7"
              buttonWith="w-44"
              buttonInsideText="Download CV"
              buttonInsideFontWeight="font-bold"
              buttonInsideTextColor=" "
              buttonInsideTextSize="text-lg"
            />
          </div>
        </div>
      </div>

      {/* My Project ~ #ebe7e0 BG */}

      {/* Review ~ white BG */}

      {/* Contact ~ #ebe7e0 BG */}
    </>
  );
};
