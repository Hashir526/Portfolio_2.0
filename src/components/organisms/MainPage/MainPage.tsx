"use client";
import React, { useContext, useRef, useState } from "react";

import { TextField } from "@mui/material";

import { Carousel } from "antd";

// import { Carousel } from "react-responsive-carousel";

import { enqueueSnackbar } from "notistack";

import emailjs from "@emailjs/browser";

import { useRouter } from "next/navigation";

import { Button, CustomImage, Text } from "@atoms";

import {
  DoubleTextContainer,
  ProjectListContainer,
  SideInfo,
  SkillInfoContainer,
  TripleTextContainer,
} from "@molecules";

import Sun from "./../../../assets/svg/Sun.svg";
import Linkedin from "./../../../assets/svg/Linkedin.svg";
import LindedinDark from "./../../../assets/svg/LindedinDarkMode.svg";
import Github from "./../../../assets/svg/Github.svg";
import GithubDark from "./../../../assets/svg/GithubDarkMode.svg";
import Check from "././../../../assets/svg/Check.svg";
import Work from "./../../../assets/svg/Work.svg";
import Review from "./../../../assets/svg/Review.svg";
import ReviewDark from "./../../../assets/svg/ReviewDarkMode.svg";
import Phone from "./../../../assets/svg/Phone.svg";
import Mail from "./../../../assets/svg/Mail.svg";
import Location from "./../../../assets/svg/Location.svg";
import KeyboardArrowLeft from "./../../../assets/svg/LeftArrow.svg";
import KeyboardArrowRight from "./../../../assets/svg/RightArrow.svg";

import Try from "./../../../assets/img/try.jpg";

import { DarkModeContext } from "../../../context/DarkMode/DarkModeContext";
import { ProjectDataContext } from "../../../context/ProjectData/ProjectDataContext";

export const MainPage = () => {
  const router = useRouter();

  const [projectSelect, SetProjectSelect] = useState("All");

  const form = useRef<HTMLFormElement | null>(null);

  const { darkMode } = useContext(DarkModeContext);

  const { setData } = useContext(ProjectDataContext);

  const socialMedia = [
    {
      logo: darkMode ? Linkedin : LindedinDark,
      url: "https://pk.linkedin.com/",
    },
    {
      logo: darkMode ? Github : GithubDark,
      url: "https://github.com/",
    },
  ];

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
      position: "Frontend Developer",
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

  const ProjectSelect = [
    {
      selectType: "All",
    },
    {
      selectType: "Frontend",
    },
    {
      selectType: "Backend",
    },
    {
      selectType: "Full-Stack",
    },
    {
      selectType: "SEO",
    },
  ];

  const ProjectComponents = [
    {
      image: Try,
      projectName: "Portfolio",
      projectType: "Frontend",
      languageUsed: "NextJs",
      summary:
        "I'm a recent Software Engineering graduate with a passion for frontend development. Skilled in HTML, CSS, Bootstrap, JavaScript, and SEO, I transform design concepts into user-friendly websites. I'm dedicated to continuous learning and eager to collaborate on exciting web projects. ",
      children: {
        ProjectSimpleDate: [
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
        ],
        ToolType: [
          {
            selectType: "All",
          },
          {
            selectType: "Language",
          },
          {
            selectType: "Library",
          },
        ],
        Tool: [
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
        ],
        images: [
          {
            src: Try,
          },
        ],
      },
    },
  ];

  const ReviewDetails = [
    {
      review:
        "heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt",
      personName: "Haseeb Farooq",
      personPosition: "Team Lead",
      personProfile: "https://www.google.com",
    },
    {
      review:
        "heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt heelo etxt",
      personName: "Adnan",
      personPosition: "Sr. Full Stack Developer",
      personProfile: "https://www.google.com",
    },
  ];

  const ContactSideData = [
    {
      icon: Phone,
      data: "+92-307-5092577",
    },
    {
      icon: Mail,
      data: "hashir.khurram@gmail.com",
    },
    {
      icon: Location,
      data: "H # 17-B, St # 10, Block-A, Naval Anchorage, Islamabad, Pakistan",
    },
  ];

  const ContactInuputs = [
    {
      header: "Name",
      name: "from_name",
      placeholder: "Enter your name",
    },
    {
      header: "Email",
      name: "user_email",

      placeholder: "Enter your email address",
    },
    ,
    {
      header: "Message",
      name: "message",
      placeholder: "Enter your message",
    },
  ];

  const navigateToURL = (url: string) => {
    window.open(url, "_blank");
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_5ql0f2x", "template_ji578fl", form.current, {
          publicKey: "gEBYwQ8j4VVHCthWg",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form?.current?.reset();
            enqueueSnackbar("Request successful", { variant: "success" });
          },
          (error: { text: any }) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleClick = (item: any) => {
    setData(item);
    router.push("/app/project-detail");
  };

  const downloadButton = () => {
    return window.open("./../../../assets/pdf/Hashir-Khurram.pdf", "_blank");
  };

  return (
    <div className={darkMode ? "" : "dark"}>
      {/* Name and Pic ~ White BG */}
      <div className="pb-14 pt-24 bg-[#FFF] dark:bg-[#181e27]">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-center">
          <CustomImage src={Sun} alt={"pic"} height={100} width={100} />
          <div className="md:max-w-[570px] md:ml-8 mt-5 md:mt-0 ">
            <DoubleTextContainer
              textContainerOne={"FrontEnd Developer"}
              textContainerOneSize={"lg:text-4xl md:text-2xl text-xl"}
              textContainerOneColor={"text-[#3c4649] dark:text-[#bdc1c7]"}
              textContainerOneFontWeight={"font-sans"}
              textContainerTwo={"Hashir Khurram"}
              textContainerTwoSize={"lg:text-9xl md:text-7xl text-4xl"}
              textContainerTwoColor={"text-[#1c2528] dark:text-[#FFF]"}
              textContainerTwoFontWeight={"font-sans"}
              textContainerPadding="ml-7"
            />
            <div className="md:border-l-2 md:border-gray-500 dark:md:border-white p-7 mt-5 md:mt-0">
              <Text
                text={"I am a FrontEnd Developer based in Islamabad, Pakistan."}
              />
              <div className="flex gap-2 mt-4 md:mt-6">
                {socialMedia.map((item, key) => {
                  return (
                    <div
                      className=""
                      key={key}
                      onClick={() => navigateToURL(item.url)}
                    >
                      <Button
                        imageSrc={item.logo}
                        imageAlt={"Logo"}
                        imageHeight={34}
                        imageCheck={true}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 ">
          {BornExpDate.map((item, key) => (
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

      {/* About Me ~ #ebe7e0 BG  */}
      <div
        id="About"
        className="bg-[#ebe7e0] dark:bg-[#222A36] py-14 w-full flex justify-center items-center"
      >
        <div className="content-center ">
          <div className="text-center">
            <Text
              text={"About Me"}
              textSize={"lg:text-9xl md:text-7xl text-4xl "}
              textColor={"text-[#1c2528] dark:text-[#FFF]"}
              fontFamily="font-[Sorts Mill Goudy]"
            />
          </div>
          <div className="flex lg:flex-row flex-col py-10">
            <div className="lg:flex-col flex-row flex lg:max-w-[140px] gap-10 mb-5 ml-10">
              {AboutSideData.map((item, key) => {
                return (
                  <div key={key}>
                    <SideInfo
                      icon={item.icon}
                      data={item.data}
                      text={item.text}
                      dataSize="md:text-4xl text-2xl"
                      textSize="md:text-xl text-base"
                    />
                  </div>
                );
              })}
            </div>
            <div className="max-w-[750px] lg:border-l-2 lg:border-gray-500 dark:md:border-white p-10 ">
              <Text
                text={
                  "I'm a recent Software Engineering graduate with a passion for frontend development. Skilled in HTML, CSS, Bootstrap, JavaScript, and SEO, I transform design concepts into user-friendly websites. I'm dedicated to continuous learning and eager to collaborate on exciting web projects. "
                }
                padding="mb-10"
              />
              <Button
                buttonBackgroundColor="bg-none hover:bg-[#ff8059] text-[#1c2528]  dark:text-[#FFF] hover:text-[#FFF] "
                buttonBorderColor="border-2 border-[#ff8059]"
                hoverStyle="transition-all duration-500 ease-in-out"
                padding="my-4"
                buttonWith="md:w-56 w-34"
                buttonInsideText="Contact Me"
                buttonInsideFontWeight="font-bold"
                buttonInsideTextColor=" "
                buttonInsideTextSize="text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* My Resume ~ White BG */}
      <div
        id="Resume"
        className="bg-[#FFF] dark:bg-[#181e27] py-14 w-full flex justify-center items-center"
      >
        <div className="content-center ">
          <div className="text-center">
            <Text
              text={"My Resume"}
              textSize={"lg:text-9xl md:text-7xl text-4xl "}
              textColor={"text-[#1c2528] dark:text-[#FFF]"}
              fontFamily="font-[Sorts Mill Goudy]"
            />
          </div>

          <div className="max-w-[1000px] md:border-l-2 md:border-gray-500 dark:md:border-white p-8 md:mt-10  ">
            <div className="p-7 lg:mb-10">
              <Text
                text={
                  "Talented UX designer with 7+ years of experience, seeking to elevate UI/UX at ABC, Inc. As Lead UI/UX Head completed project before dead line. ittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euism od leo um, at pellentesque velituis a congue sem."
                }
              />
            </div>
            <div className="p-7">
              <Text
                text={"SKILLS"}
                textSize={"lg:text-4xl text-2xl "}
                fontWeight="font-bold"
                textColor={"text-[#1c2528]  dark:text-[#FFF]"}
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
              <div className="flex md:gap-48 gap-10  flex-wrap ">
                <div>
                  <div className="">
                    <Text
                      text={"Education"}
                      textSize={"lg:text-4xl text-2xl"}
                      fontWeight="font-bold"
                      textColor={"text-[#1c2528]  dark:text-[#FFF]"}
                      padding="pb-10"
                    />
                    {EducationData.map((item, key) => {
                      return (
                        <div className="mb-12 " key={key}>
                          <TripleTextContainer
                            textContainerOne={`${item.startTime}-${item.endTime}`}
                            textContainerOneSize={"lg:text-xl text-base"}
                            textContainerOneColor={
                              "text-[#3c4649] dark:text-[#bdc1c7]"
                            }
                            textContainerTwo={item.degree}
                            textContainerTwoSize={"lg:text-2xl text-lg"}
                            textContainerTwoColor={
                              "text-[#1c2528]  dark:text-[#FFF]"
                            }
                            textContainerTwoFontWeight="font-bold"
                            textContainerThree={item.institute}
                            textContainerThreeSize={"lg:text-xl text-base"}
                            textContainerThreeColor={
                              "text-[#3c4649]  dark:text-[#bdc1c7]"
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="">
                    <Text
                      text={"Course"}
                      textSize={"lg:text-4xl text-2xl"}
                      fontWeight="font-bold"
                      textColor={"text-[#1c2528]  dark:text-[#FFF]"}
                      padding="pb-10"
                    />
                    {Course.map((item, key) => {
                      return (
                        <div className="mb-12" key={key}>
                          <TripleTextContainer
                            textContainerOne={`${item.startTime}-${item.endTime}`}
                            textContainerOneSize={"lg:text-xl text-base"}
                            textContainerOneColor={
                              "text-[#3c4649]  dark:text-[#bdc1c7]"
                            }
                            textContainerTwo={item.degree}
                            textContainerTwoSize={"lg:text-2xl text-lg"}
                            textContainerTwoColor={
                              "text-[#1c2528]  dark:text-[#FFF]"
                            }
                            textContainerTwoFontWeight="font-bold"
                            textContainerThree={item.institute}
                            textContainerThreeSize={"lg:text-xl text-base"}
                            textContainerThreeColor={
                              "text-[#3c4649]  dark:text-[#bdc1c7]"
                            }
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
                      textSize={"lg:text-4xl text-2xl"}
                      fontWeight="font-bold"
                      textColor={"text-[#1c2528]  dark:text-[#FFF]"}
                      padding="pb-10"
                    />
                    {WorkExperience.map((item, key) => {
                      return (
                        <div key={key}>
                          <TripleTextContainer
                            textContainerOne={`${item.startTime}-${item.endTime}`}
                            textContainerOneSize={"lg:text-xl text-base"}
                            textContainerOneColor={
                              "text-[#3c4649]  dark:text-[#bdc1c7]"
                            }
                            textContainerTwo={item.institute}
                            textContainerTwoSize={"lg:text-2xl text-lg"}
                            textContainerTwoColor={
                              "text-[#1c2528]  dark:text-[#FFF]"
                            }
                            textContainerTwoFontWeight="font-bold"
                            textContainerThree={item.position}
                            textContainerThreeSize={"lg:text-xl text-base"}
                            textContainerThreeColor={
                              "text-[#3c4649]  dark:text-[#bdc1c7]"
                            }
                          />
                          <Text
                            text={item.detail}
                            textSize={"lg:text-xl text-base"}
                            textColor={"text-[#1c2528]  dark:text-[#bdc1c7]"}
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
              buttonBackgroundColor="bg-none hover:bg-[#ff8059] text-[#1c2528] dark:text-[#FFF] hover:text-[#FFF]"
              buttonBorderColor="border-2 border-[#ff8059]"
              hoverStyle="transition-all duration-500 ease-in-out"
              padding="my-4"
              buttonWith="md:w-56 w-34"
              buttonInsideText={"Download CV"}
              buttonInsideFontWeight="font-bold"
              buttonInsideTextColor=" "
              buttonInsideTextSize="text-lg"
              handleOnClick={() => downloadButton()}
            />
          </div>
        </div>
      </div>

      {/* My Project ~ #ebe7e0 BG  */}
      <div
        id="Projects"
        className="bg-[#ebe7e0] dark:bg-[#222A36] py-14 w-full flex justify-center items-center"
      >
        <div className="content-center ">
          <div className="text-center">
            <Text
              text={"My Projects"}
              textSize={"lg:text-9xl md:text-7xl text-4xl "}
              textColor={"text-[#1c2528] dark:text-[#FFF]"}
              fontFamily="font-[Sorts Mill Goudy]"
            />
          </div>

          <div className="lg:max-w-[1000px] lg:border-l-2 lg:border-gray-500 dark:md:border-white p-8 my-10 ">
            <div className="p-7 ">
              <Text
                text={
                  "A Collection of my favorites project I’ve designed recently. Feeling great while sharing here."
                }
              />
            </div>
          </div>

          <div className="lg:max-w-[800px] m-10 flex Fivess:place-content-around justify-center items-center align-middle Fivess:flex-row flex-col ">
            {ProjectSelect.map((item, key) => {
              return (
                <div className="" key={key}>
                  <Button
                    buttonBackgroundColor="bg-none"
                    buttonInsideText={item.selectType}
                    buttonInsideTextColor="text-black  dark:text-[#FFF]"
                    buttonInsideTextSize="lg:text-4xl md:text-2xl Fivess:text-lg text-2xl"
                    buttonInsideFontWeight="font-bold"
                    buttonRadius="rounded-none    "
                    hoverStyle={`hover:border-b-4 hover:border-[#ff8059] ${
                      item.selectType === projectSelect
                        ? "border-b-4 border-[#ff8059]"
                        : "border-b-4 border-[#ebe7e0] dark:border-[#222A36]"
                    }`}
                    handleOnClick={() => SetProjectSelect(item.selectType)}
                  />
                </div>
              );
            })}
          </div>

          <div className="lg:max-w-[1000px] my-10">
            {ProjectComponents.filter(
              (item) =>
                projectSelect === "All" || item.projectType === projectSelect
            ).map((item, key) => {
              return (
                <div
                  key={key}
                  className="flex items-center"
                  onClick={() => handleClick(item)}
                >
                  <ProjectListContainer
                    image={item.image}
                    projectName={item.projectName}
                    projectType={item.projectType}
                    languageUsed={item.languageUsed}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Review ~ white BG  */}
      <div className="bg-[#FFF] dark:bg-[#181e27] py-14 w-full flex justify-center items-center">
        <div className="content-center flex flex-col items-center">
          <CustomImage
            src={darkMode ? Review : ReviewDark}
            alt={"Review"}
            height={150}
            width={150}
            padding="ml-12"
          />
          <Carousel
            autoplay
            className="flex items-center justify-center xl:w-[1000px] md:w-[700px] Fivess:w-[400px] w-[200px] my-20 Fivess:h-60 h-80 "
          >
            {ReviewDetails.map((item, key) => {
              return (
                <div
                  className="flex flex-col items-center justify-center h-full"
                  key={key}
                >
                  <div className="text-center mb-5">
                    <Text
                      text={`"${item.review}"`}
                      textColor="dark:text-[#FFF] text-black"
                    />
                  </div>
                  <div
                    onClick={() => navigateToURL(item.personProfile)}
                    className="mb-5 text-center"
                  >
                    <Text
                      text={item.personName}
                      cursorShape="cursor-pointer"
                      fontWeight="font-bold"
                      textSize="text-3xl"
                      textColor="dark:text-[#FFF] text-black"
                    />
                  </div>
                  <div className="text-center">
                    <Text
                      text={item.personPosition}
                      textColor="dark:text-[#FFF] text-black"
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>

          {/* <Carousel showArrows={true}>
            <div>
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <p className="legend">Legend 5</p>
            </div>
            <div>
              <p className="legend">Legend 6</p>
            </div>
          </Carousel> */}

          {/* <Carousel
            autoPlay
            className="flex items-center justify-center xl:w-[1000px] md:w-[700px] Fivess:w-[400px] w-[200px] my-20 Fivess:h-60 h-80"
          >
            {ReviewDetails.map((item, key) => (
              <div
                className="flex flex-col items-center justify-center h-full"
                key={key}
              >
                <div className="text-center mb-5">
                  <Text
                    text={`"${item.review}"`}
                    textColor="dark:text-[#FFF] text-black"
                  />
                </div>
                <div
                  onClick={() => navigateToURL(item.personProfile)}
                  className="mb-5 text-center"
                >
                  <Text
                    text={item.personName}
                    cursorShape="cursor-pointer"
                    fontWeight="font-bold"
                    textSize="text-3xl"
                    textColor="dark:text-[#FFF] text-black"
                  />
                </div>
                <div className="text-center">
                  <Text
                    text={item.personPosition}
                    textColor="dark:text-[#FFF] text-black"
                  />
                </div>
              </div>
            ))}
          </Carousel> */}
        </div>
      </div>

      {/* Contact ~ #ebe7e0 BG  */}
      <div
        id="Contact"
        className="bg-[#ebe7e0] dark:bg-[#222A36] py-14 w-full flex justify-center items-center"
      >
        <div className="content-center ">
          <div className="text-center">
            <Text
              text={"Contact Me"}
              textSize={"lg:text-9xl md:text-7xl text-4xl "}
              textColor={"text-[#1c2528] dark:text-[#FFF]"}
              fontFamily="font-[Sorts Mill Goudy]"
            />
          </div>

          <div className="flex md:flex-row flex-col py-10">
            <div className="flex md:flex-col Fivess:flex-row flex-col Fivess:gap-10 ml-10">
              {ContactSideData.map((item, key) => {
                return (
                  <div key={key} className="w-full md:w-auto md:mb-0 md:mr-5">
                    <SideInfo
                      icon={item.icon}
                      data={item.data}
                      dataSize="md:text-lg text-sm"
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full md:border-l-2 md:border-gray-500 p-10 ">
              <form ref={form} onSubmit={sendEmail}>
                {ContactInuputs.map((item, key) => (
                  <div key={key} className="mb-5">
                    <Text
                      text={item?.header}
                      textColor={"text-[#1c2528] dark:text-[#FFF]"}
                      fontWeight="font-bold"
                      textSize={"md:text-2xl text-lg"}
                      padding="mb-2"
                    />
                    <TextField
                      id="outlined-number"
                      multiline
                      className="w-[100%] "
                      name={item?.name}
                      placeholder={item?.placeholder}
                    />
                  </div>
                ))}

                <Button
                  type={"submit"}
                  buttonBackgroundColor="bg-none hover:bg-[#ff8059] text-[#1c2528] dark:text-[#FFF] hover:text-[#FFF] "
                  buttonBorderColor="border-2 border-[#ff8059]"
                  hoverStyle="transition-all duration-500 ease-in-out"
                  padding="my-4"
                  buttonWith="md:w-56 w-34"
                  buttonInsideText="Submit"
                  buttonInsideFontWeight="font-bold"
                  buttonInsideTextColor=" "
                  buttonInsideTextSize="text-lg"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
