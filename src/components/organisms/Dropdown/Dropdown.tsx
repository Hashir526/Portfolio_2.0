"use client";
import React, { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import { Button } from "@atoms";
import Cross from "./../../../assets/svg/Cross.svg";
import CrossDarkMode from "./../../../assets/svg/CrossDarkMode.svg";
import Bar from "./../../../assets/svg/Bar.svg";
import BarDarkMode from "./../../../assets/svg/BarDarkMode.svg";
import { DarkModeContext } from "../../../context/DarkMode/DarkModeContext";

export const Dropdown = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  const Pages = [
    {
      title: "About",
      section: section1,
    },
    {
      title: "Resume",
      section: section2,
    },
    {
      title: "Projects",
      section: section3,
    },
    {
      title: "Contact",
      section: section4,
    },
  ];

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleClick = (ref: any) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
      handleClose();
    }
  };

  return (
    <div>
      <Button
        imageSrc={darkMode ? Bar : BarDarkMode}
        imageAlt={"Bar"}
        handleOnClick={handleOpen}
        imageHeight={34}
        imageCheck={true}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={`${darkMode ? "" : "dark"} modal-transition`}
      >
        <div className="absolute top-0 right-0 flex flex-col w-full h-full bg-[#ebe7e0] dark:bg-[#181e27] p-10 transition-transform duration-500 transform">
          <div className="absolute top-0 right-0 m-11">
            <Button
              imageSrc={darkMode ? Cross : CrossDarkMode}
              imageHeight={40}
              imageWidth={40}
              handleOnClick={handleClose}
              imageCheck={true}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-14 mt-16">
            {Pages.map((item, key) => (
              <div key={key}>
                <Button
                  buttonInsideText={item.title}
                  buttonInsideTextSize="md:text-7xl text-5xl"
                  buttonInsideFontWeight="font-bold"
                  buttonInsideTextColor="text-[#1c2528] dark:text-[#FFF]"
                  handleOnClick={() => handleClick(item.section)}
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
