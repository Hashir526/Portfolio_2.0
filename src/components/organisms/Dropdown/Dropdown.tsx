import React from "react";
import { Button } from "@atoms";
import Modal from "@mui/material/Modal";
import Cross from "./../../../assets/svg/Cross.svg";
import Bar from "./../../../assets/svg/Bar.svg";

export const Dropdown = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Pages = [
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
    <div>
      <Button
        imageSrc={Bar}
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
        className="modal-transition"
      >
        <div className="absolute top-0 right-0 flex flex-col w-full h-full bg-[#ebe7e0] p-10 transition-transform duration-500 transform">
          <div className="absolute top-0 right-0 m-11">
            <Button
              imageSrc={Cross}
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
                  buttonInsideTextColor="text-[#1c2528]"
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
