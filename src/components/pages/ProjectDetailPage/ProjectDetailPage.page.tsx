import React from "react";
import { ProjectDetail } from "@organisms";

export const ProjectDetailPage = ({ data }: { data: any }) => {
  return (
    <>
      <ProjectDetail data={data} />
    </>
  );
};
