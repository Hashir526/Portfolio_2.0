import React from "react";

import { CustomImage } from "@atoms";

import { DoubleTextContainer } from "@molecules";

export const SideInfo = ({
  icon,
  data,
  text,
  divStyling,
  dataSize,
}: {
  icon: any;
  data?: string;
  text?: string;
  divStyling?: string;
  dataSize?: string;
}) => {
  return (
    <div className={`${divStyling}`}>
      <CustomImage src={icon} alt={icon} height={44} padding="py-4" />
      <DoubleTextContainer
        textContainerOne={data}
        textContainerOneSize={`${dataSize ? dataSize : "text-4xl"}`}
        textContainerOneColor={"text-[#1c2528]"}
        textContainerOneFontWeight="font-bold"
        textContainerTwo={text}
        textContainerTwoSize={"text-xl"}
        textContainerTwoColor={"text-[#3c4649]"}
      />
    </div>
  );
};
