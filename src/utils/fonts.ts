import { Galada } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";

export const galada = Galada({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],

  weight: ["400", "600"],
  style: ["normal"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
});
