import React from "react";
import { CustomImage, Text } from "@atoms";

export function Button({
  buttonStyling,
  buttonBackgroundColor,
  buttonWith,
  buttonHeight,
  buttonBorderColor,
  buttonRadius,
  buttonOutsideText,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlert,
  type,
  isLoading = false,
  handleOnClick,
  buttonInsideText,
  buttonInsideTextColor,
  buttonInsideTextSize,
  buttonInsideFontWeight,
}: {
  buttonStyling?: string;
  buttonBackgroundColor?: string;
  buttonBorderColor?: string;
  buttonHeight?: string;
  buttonWith?: string;
  buttonRadius?: string;
  buttonOutsideText?: string;
  imageSrc?: any;
  imageWidth?: any;
  imageHeight?: any;
  imageAlert?: any;
  type?: any;
  isLoading?: boolean;
  handleOnClick?: () => void;
  buttonInsideText?: string;
  buttonInsideTextColor?: string;
  buttonInsideTextSize?: string;
  buttonInsideFontWeight?: string;
}) {
  return (
    <>
      <button
        onClick={handleOnClick}
        type={type}
        className={`${
          buttonStyling
            ? `${buttonStyling}`
            : "flex justify-center items-center p-2 "
        }
         ${buttonWith} ${buttonHeight} ${buttonBorderColor} 
         ${buttonRadius ? `${buttonRadius}` : "rounded-md "}
          ${buttonBackgroundColor}
        `}
      >
        {isLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            <Text
              text={buttonOutsideText}
              textColor={"text-[#FFF]"}
              textSize={"text-base"}
              fontWeight="font-normal"
            />
            {imageSrc !== null ? (
              <CustomImage
                src={imageSrc}
                width={imageHeight}
                height={imageWidth}
                alt={imageAlert}
              />
            ) : null}
            {buttonInsideText !== "" ? (
              <Text
                text={buttonInsideText}
                textColor={buttonInsideTextColor}
                textSize={buttonInsideTextSize}
                fontWeight={buttonInsideFontWeight}
              />
            ) : null}
          </>
        )}
      </button>
    </>
  );
}
