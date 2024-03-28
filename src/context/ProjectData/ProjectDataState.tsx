"use client";

import React, { useState } from "react";
import {
  ProjectDataContext,
  ProjectDataContextType,
} from "./ProjectDataContext";

export const ProjectDataState = (props: any) => {
  const [data, setData] = useState();

  const ProjectDataContextValue: ProjectDataContextType = {
    data,
    setData,
  };

  return (
    <ProjectDataContext.Provider value={ProjectDataContextValue}>
      {props.children}
    </ProjectDataContext.Provider>
  );
};
