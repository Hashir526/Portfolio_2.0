import React from "react";

import { Text } from "@atoms";

export function TripleTextContainer({
  contentGap,
  textContainerPadding,
  textContainerWidth,
  textContainerHeight,
  textContainerOne,
  textContainerOneSize,
  textContainerOneColor,
  textContainerOneFontWeight,
  textContainerOneFontFamily,

  textContainerTwo,
  textContainerTwoSize,
  textContainerTwoColor,
  textContainerTwoFontWeight,
  textContainerTwoFontFamily,

  textContainerThree,
  textContainerThreeSize,
  textContainerThreeColor,
  textContainerThreeFontWeight,
  textContainerThreeFontFamily,
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

  textContainerThree: string;
  textContainerThreeSize: string;
  textContainerThreeColor: string;
  textContainerThreeFontWeight?: string;
  textContainerThreeFontFamily?: string;
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
          fontFamily={textContainerOneFontFamily}
          padding="py-1"
        />
        <Text
          text={textContainerTwo}
          textSize={textContainerTwoSize}
          textColor={textContainerTwoColor}
          fontWeight={textContainerTwoFontWeight}
          fontFamily={textContainerTwoFontFamily}
          padding="py-1"
        />
        <Text
          text={textContainerThree}
          textSize={textContainerThreeSize}
          textColor={textContainerThreeColor}
          fontWeight={textContainerThreeFontWeight}
          fontFamily={textContainerThreeFontFamily}
          padding="py-1"
        />
      </div>
    </>
  );
}
