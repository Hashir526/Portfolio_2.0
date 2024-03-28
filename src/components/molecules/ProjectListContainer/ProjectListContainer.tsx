import { CustomImage } from "@atoms";
import { TripleTextContainer } from "@molecules";
import React from "react";

export const ProjectListContainer = ({
  image,
  projectName,
  projectType,
  languageUsed,
}: {
  image: any;
  projectName: string;
  projectType: string;
  languageUsed: string;
}) => {
  return (
    <div className="hover:cursor-pointer hover:opacity-70 flex justify-center items-center lg:m-20 m-10 gap-10">
      <div className="">
        <CustomImage src={image} alt={"image"} height={100} width={500} />
      </div>
      <div className="flex flex-col items-center">
        <TripleTextContainer
          textContainerOne={projectName}
          textContainerOneSize={"lg:text-8xl md:text-4xl text-2xl"}
          textContainerOneColor={"text-[#1c2528] dark:text-[#FFF]"}
          textContainerOneFontWeight="font-semibold"
          textContainerOnePadding="pb-8"
          textContainerTwo={projectType}
          textContainerTwoSize={"lg:text-3xl md:text-xl text-base"}
          textContainerTwoColor={"text-[#3c4649] dark:text-[#bdc1c7]"}
          textContainerThree={languageUsed}
          textContainerThreeSize={"lg:text-3xl md:text-xl text-base"}
          textContainerThreeColor={"text-[#3c4649] dark:text-[#bdc1c7]"}
        />
      </div>
    </div>
  );
};
