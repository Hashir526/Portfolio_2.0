import React from "react";

export const Text = ({
  text,
  textSize,
  fontWeight,
  textColor,
  textAlign,
  padding,
  border,
  borderColor,
  width,
  underlineText,
  cursorShape,
  fontFamily,
}: {
  text: any;
  textSize?: any;
  fontWeight?: string;
  textColor?: any;
  textAlign?: string;
  padding?: string;
  border?: string;
  borderColor?: string;
  width?: string;
  underlineText?: string;
  cursorShape?: string;
  fontFamily?: string;
}) => {
  return (
    <>
      <p
        className={`${
          textSize ? `${textSize}` : "text-xl"
        } ${underlineText} ${padding}  ${fontWeight} ${
          textColor ? `${textColor}` : "text-[#3c4649]"
        } ${textAlign} ${borderColor} ${border} ${width} ${cursorShape} ${fontFamily}`}
      >
        {text}
      </p>
    </>
  );
};
