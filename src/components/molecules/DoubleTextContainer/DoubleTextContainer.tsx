import React from "react";

import { Text } from "@atoms";

export function DoubleTextContainer({
  contentGap,
  textContainerPadding,
  textContainerWidth,
  textContainerHeight,
  textContainerOne,
  textContainerOneSize,
  textContainerOneColor,
  textContainerOneFontWeight,
  textContainerTwo,
  textContainerTwoSize,
  textContainerTwoColor,
  textContainerTwoFontWeight,
}: {
  contentGap?: string;
  textContainerWidth?: string;
  textContainerHeight?: string;
  textContainerPadding?: string;
  textContainerOne: string;
  textContainerOneSize: string;
  textContainerOneColor: string;
  textContainerOneFontWeight?: string;
  textContainerOneFontFamily?: string;

  textContainerTwo: string;
  textContainerTwoSize: string;
  textContainerTwoColor: string;
  textContainerTwoFontWeight?: string;
  textContainerTwoFontFamily?: string;
}) {
  return (
    <>
      <div
        className={`${textContainerWidth} ${textContainerHeight} ${textContainerPadding} ${contentGap} `}
      >
        <Text
          text={textContainerOne}
          textSize={textContainerOneSize}
          textColor={textContainerOneColor}
          fontWeight={textContainerOneFontWeight}
        />
        <Text
          text={textContainerTwo}
          textSize={textContainerTwoSize}
          textColor={textContainerTwoColor}
          fontWeight={textContainerTwoFontWeight}
        />
      </div>
    </>
  );
}
