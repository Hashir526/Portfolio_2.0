import React from "react";
import { CustomImage, Text } from "@atoms";

export function Button({
  disabled = false,
  buttonStyling,
  hoverStyle,
  activeStyle,
  buttonBackgroundColor,
  buttonWith,
  buttonHeight,
  buttonBorderColor,
  buttonRadius,
  padding,
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
  disabled?: boolean;

  buttonStyling?: string;
  hoverStyle?: string;
  activeStyle?: string;
  buttonBackgroundColor?: string;
  buttonBorderColor?: string;
  buttonHeight?: string;
  buttonWith?: string;
  buttonRadius?: string;
  padding?: string;
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
        disabled={disabled}
        type={type}
        className={`${
          buttonStyling
            ? `${buttonStyling}`
            : "flex justify-center items-center p-2 "
        }
         ${buttonWith} ${buttonHeight} ${buttonBorderColor} 
         ${buttonRadius ? `${buttonRadius}` : "rounded-md "}
         ${disabled ? "cursor-not-allowed " : buttonBackgroundColor}
          ${hoverStyle} ${padding} ${activeStyle}
        `}
      >
        {isLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            <Text
              text={buttonInsideText}
              textColor={buttonInsideTextColor}
              textSize={buttonInsideTextSize}
              fontWeight={buttonInsideFontWeight}
            />
            {imageSrc !== null ? (
              <CustomImage
                src={imageSrc}
                width={imageHeight}
                height={imageWidth}
                alt={imageAlert}
              />
            ) : null}
          </>
        )}
      </button>
    </>
  );
}
