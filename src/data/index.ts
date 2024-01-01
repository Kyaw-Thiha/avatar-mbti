import { enfjData } from "./enfj";
import { enfpData } from "./enfp";
import { entjData } from "./entj";
import { esfjData } from "./esfj";
import { estjData } from "./estj";
import { infjData } from "./infj";
import { infpData } from "./infp";
import { intjData } from "./intj";
import { intpData } from "./intp";
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
    case "intp":
      return intpData;
    case "entj":
      return entjData;
    case "estj":
      return estjData;
    case "esfj":
      return esfjData;
    case "intj":
      return intjData;
    default:
      return enfjData;
  }
};
