import React from "react";

import { Rate } from "antd";

import { XFilled } from "@ant-design/icons";

import { Text } from "@atoms";

export const SkillInfoContainer = ({
  language,
  grip,
}: {
  language: string;
  grip: number;
}) => {
  return (
    <>
      <Text
        text={language}
        textSize={"md:text-3xl text-xl"}
        fontWeight="font-bold"
        textColor={"text-[#1c2528]  dark:text-[#FFF] "}
      />
      <Rate
        disabled
        defaultValue={grip}
        count={10}
        character={<XFilled style={{ backgroundColor: "grey" }} />}
        style={{ color: "#ff8059" }}
        className="hidden sm:block"
      />
      <Text
        text={`${(grip / 10) * 100} %`}
        borderColor="bg-[#ff8059]"
        padding="p-2"
        border="rounded-full"
        textColor={"text-[#FFF]"}
        textSize={"md:text-xl text-base"}
        fontWeight="font-bold"
      />
    </>
  );
};
