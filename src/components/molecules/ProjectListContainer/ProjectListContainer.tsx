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
    <>
      <div className="">
        <CustomImage src={image} alt={"image"} height={100} width={500} />
      </div>
      <div className="flex flex-col items-center">
        <TripleTextContainer
          textContainerOne={projectName}
          textContainerOneSize={"text-8xl"}
          textContainerOneColor={"text-[#1c2528]"}
          textContainerOneFontWeight="font-semibold"
          textContainerOnePadding="pb-8"
          textContainerTwo={projectType}
          textContainerTwoSize={"text-3xl"}
          textContainerTwoColor={"#3c4649"}
          textContainerThree={languageUsed}
          textContainerThreeSize={"text-3xl"}
          textContainerThreeColor={"#3c4649"}
        />
      </div>
    </>
  );
};
