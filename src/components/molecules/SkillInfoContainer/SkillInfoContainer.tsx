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
        textSize={"text-3xl"}
        fontWeight="font-bold"
        textColor={"text-[#1c2528] "}
      />
      <Rate
        disabled
        defaultValue={grip}
        count={10}
        character={<XFilled />}
        style={{ color: "#ff8059" }}
      />
      <Text
        text={`${(grip / 10) * 100} %`}
        borderColor="bg-[#ff8059]"
        padding="p-2"
        border="rounded-full"
        textColor={"text-[#FFF]"}
        textSize={"text-xl"}
        fontWeight="font-bold"
      />
    </>
  );
};
