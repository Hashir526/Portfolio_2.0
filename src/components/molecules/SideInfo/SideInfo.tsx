import React from "react";

import { CustomImage } from "@atoms";

import { DoubleTextContainer } from "@molecules";

export const SideInfo = ({
  icon,
  data,
  text,
}: {
  icon: any;
  data: string;
  text: string;
}) => {
  return (
    <div>
      <CustomImage src={icon} alt={icon} height={44} padding="py-4" />
      <DoubleTextContainer
        textContainerOne={data}
        textContainerOneSize={"text-4xl"}
        textContainerOneColor={"text-[#1c2528]"}
        textContainerOneFontWeight="font-bold"
        textContainerTwo={text}
        textContainerTwoSize={"text-xl"}
        textContainerTwoColor={"text-[#3c4649]"}
      />
    </div>
  );
};
