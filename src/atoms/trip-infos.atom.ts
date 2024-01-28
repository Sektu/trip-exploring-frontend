import { atom } from "recoil";
import { TripInfo, TripsResponse } from "../types/types";

export const tripInfosAtom = atom({
  key: "tripInfosAtom",
  default: {
    tripInfos: [] as TripInfo[],
    currentPage: 1,
    totalPages: 0,
  },
});
