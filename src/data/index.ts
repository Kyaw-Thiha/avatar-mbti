import { enfjData } from "./enfj";
import { infjData } from "./infj";

export const getPersonalityData = (personality: string) => {
  switch (personality) {
    case "enfj":
      return enfjData;
    case "infj":
      return infjData;
    default:
    // code block
  }
};
