import { enfjData } from "./enfj";
import { enfpData } from "./enfp";
import { infjData } from "./infj";
import { infpData } from "./infp";
import { isfjData } from "./isfj";
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
    case "isfj":
      return isfjData;
    case "enfp":
      return enfpData;
    default:
      return infjData;
  }
};
