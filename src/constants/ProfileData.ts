import { useContext } from "react";

import Sun from "./../assets/svg/Sun.svg";
import Linkedin from "./../assets/svg/Linkedin.svg";
import LindedinDark from "./../assets/svg/LindedinDarkMode.svg";
import Github from "./../assets/svg/Github.svg";
import GithubDark from "./../assets/svg/GithubDarkMode.svg";
import Check from "./../assets/svg/Check.svg";
import Work from "./../assets/svg/Work.svg";
import Review from "./../assets/svg/Review.svg";
import ReviewDark from "./../assets/svg/ReviewDarkMode.svg";
import Phone from "./../assets/svg/Phone.svg";
import Mail from "./../assets/svg/Mail.svg";
import Location from "./../assets/svg/Location.svg";
import KeyboardArrowLeft from "./../assets/svg/LeftArrow.svg";
import KeyboardArrowRight from "./../assets/svg/RightArrow.svg";

import Try from "./../assets/img/try.jpg";
import { DarkModeContext } from "./../context/DarkMode/DarkModeContext";





const SocialMediaIcons = () => {
  const { darkMode } = useContext(DarkModeContext);

  const data = {
    socialMedia: [
      {
        logo: darkMode ? Linkedin : LindedinDark,
        url: "https://www.linkedin.com/in/hashir-khurram-55055aa9/",
      },
      {
        logo: darkMode ? Github : GithubDark,
        url: "https://github.com/Hashir526",
      },
    ],
  
    BornExpDate: [
      {
        TextOne: "Born in",
        TextTwo: "Islamabad",
      },
      {
        TextOne: "Experience",
        TextTwo: "10 months",
      },
      {
        TextOne: "Date of Birth",
        TextTwo: "8th Jan 2001",
      },
    ],
  
    AboutSideData: [
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
    ],
  
    Skills: [
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
        language: "Typescript",
        grip: 6,
      },
      {
        language: "CSS",
        grip: 6,
      },
      
      {
        language: "Bootstrap",
        grip: 6,
      },
    ],
  
    EducationData: [
      {
        startTime: "2024",
        endTime: "In Progress",
        degree: "Masters in Media Informatics",
        institute: "Saarland University",
      },
      {
        startTime: "2019",
        endTime: "2023",
        degree: "Bachelors in Software Engineering",
        institute: "Comsat University",
      },
    ],
  
    WorkExperience: [
      {
        startTime: "Sept, 2023",
        endTime: "June, 2024",
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
    ],
  
    Course: [
      {
        startTime: "20 Nov, 2023",
        endTime: "30 Nov, 2023",
        degree: "Javascript Tutorials",
        institute: "Akshay Saini",
      },
      {
        startTime: "7 Oct, 2023",
        endTime: "20 Oct, 2023",
        degree: "ReactJS Tutorial",
        institute: "CodeWithHarry",
      },
      {
        startTime: "20 Sept, 2023",
        endTime: "6 Oct, 2023",
        degree: "JavaScript Tutorials for Beginners",
        institute: "CodeWithHarry",
      },
      {
        startTime: "10 Dec, 2021",
        endTime: "13 Feb, 2022",
        degree: "Digital marketing, SEO and Affliate Marketing Certificate",
        institute: "MasterMinded",
      },
    ],
  
    ProjectSelect: [
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
    ],
  
    ProjectComponents: [
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
    ],
  
    ReviewDetails: [
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
    ],
  
    ContactSideData: [
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
    ],
  
    ContactInuputs: [
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
      {
        header: "Message",
        name: "message",
        placeholder: "Enter your message",
      },
    ],
  };

  return data;
};

export default SocialMediaIcons;