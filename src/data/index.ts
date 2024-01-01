import { enfjData } from "./enfj";
import { infjData } from "./infj";
import { infpData } from "./infp";
import { isfpData } from "./isfp";

export const getPersonalityData = (personality: string) => {
  switch (personality) {
    case "enfj":
      return enfjData;
    case "infj":
      return infjData;
    case "isfp":
      return isfpData;
    case "infp":
      return infpData;
    default:
      return infjData;
  }
};
