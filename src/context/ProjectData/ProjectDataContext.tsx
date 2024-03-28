import { Context, createContext } from "react";

export interface ProjectDataContextType {
  data: any;
  setData: any;
}

// Define data and setData
const initialData: any = null;
const initialSetData: any = () => {};

export const ProjectDataContext: Context<ProjectDataContextType> =
  createContext<ProjectDataContextType>({
    data: initialData,
    setData: initialSetData,
  });
