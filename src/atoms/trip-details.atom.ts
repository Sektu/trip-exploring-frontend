import { atom } from "recoil";
import { Trip } from "../types/types";

export const tripDetailsAtom = atom({
  key: "tripDetailsAtom",
  default: {} as Record<number, Trip>,
});
