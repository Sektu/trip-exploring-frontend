import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { TripsResponse } from "../types/types";
import { tripInfosAtom } from "../atoms/trip-infos.atom";
import { useRecoilState } from "recoil";
import { TripCardsGrid } from "./trip-cards/trip-cards-grid.component";
import { useMediaQuery } from "@chakra-ui/react";

const PAGE_SIZE_HD = 12;
const BASE_URL =
  "https://trips-exploring-backend.netlify.app/.netlify/functions";

export const Trips = () => {
  const [state, setState] = useRecoilState(tripInfosAtom);

  const fetchTrips = async () => {
    const tripsUrl = `/trips?page=${state.currentPage}&pageSize=${PAGE_SIZE_HD}`;
    const response = await fetch(`${BASE_URL}${tripsUrl}`);

    const { totalPages, trips } = (await response.json()) as TripsResponse;

    setState({
      currentPage: state.currentPage + 1,
      totalPages: totalPages,
      tripInfos: state.tripInfos.concat(trips),
    });
  };

  useEffect(() => {
    fetchTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={state.tripInfos.length}
      next={fetchTrips}
      hasMore={state.currentPage <= state.totalPages}
      loader={<h4>Loading...</h4>}
    >
      <TripCardsGrid tripInfos={state.tripInfos} />
    </InfiniteScroll>
  );
};
