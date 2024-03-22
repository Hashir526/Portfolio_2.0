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
  textContainerOnePadding,

  textContainerTwo,
  textContainerTwoSize,
  textContainerTwoColor,
  textContainerTwoFontWeight,
  textContainerTwoFontFamily,
  textContainerTwoPadding,

  textContainerThree,
  textContainerThreeSize,
  textContainerThreeColor,
  textContainerThreeFontWeight,
  textContainerThreeFontFamily,
  textContainerThreePadding,
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
  textContainerOnePadding?: string;

  textContainerTwo: string;
  textContainerTwoSize: string;
  textContainerTwoColor: string;
  textContainerTwoFontWeight?: string;
  textContainerTwoFontFamily?: string;
  textContainerTwoPadding?: string;

  textContainerThree: string;
  textContainerThreeSize: string;
  textContainerThreeColor: string;
  textContainerThreeFontWeight?: string;
  textContainerThreeFontFamily?: string;
  textContainerThreePadding?: string;
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
          padding={`${
            textContainerOnePadding ? textContainerOnePadding : `py-1`
          }`}
        />
        <Text
          text={textContainerTwo}
          textSize={textContainerTwoSize}
          textColor={textContainerTwoColor}
          fontWeight={textContainerTwoFontWeight}
          fontFamily={textContainerTwoFontFamily}
          padding={`${
            textContainerTwoPadding ? textContainerTwoPadding : `py-1`
          }`}
        />
        <Text
          text={textContainerThree}
          textSize={textContainerThreeSize}
          textColor={textContainerThreeColor}
          fontWeight={textContainerThreeFontWeight}
          fontFamily={textContainerThreeFontFamily}
          padding={`${
            textContainerThreePadding ? textContainerThreePadding : `py-1`
          }`}
        />
      </div>
    </>
  );
}
