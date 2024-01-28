import { PropsWithChildren } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { TripInfo } from "../../types/types";
import { TripCard } from "./trip-card.component";
import { TripCardContent } from "./trip-card-content.component";
import { TripCardHeader } from "./trip-card-header.component";
import { TripCardFooter } from "./trip-card-footer.component";
import { LearnMoreButton } from "./learn-more-button.component";
import { Emissions } from "./emissions.component";
import { Rating } from "./rating.component";

export type TripCardsGridProps = PropsWithChildren<{ tripInfos: TripInfo[] }>;
export const TripCardsGrid = ({ tripInfos }: TripCardsGridProps) => {
  return (
    <SimpleGrid
      spacing={4}
      backgroundColor="gray.200"
      py="50"
      px="200"
      minChildWidth="300px"
    >
      {tripInfos.length &&
        tripInfos.map((tripInfo) => {
          return (
            <TripCard id={tripInfo.id} photoUrl={tripInfo.photoUrl}>
              <TripCardContent>
                <TripCardHeader {...tripInfo} />
                <LearnMoreButton path={`/tripDetails/${tripInfo.id}`} />
                <TripCardFooter>
                  <Emissions co2kilograms={tripInfo.co2kilograms} />
                  <Rating rating={tripInfo.rating} />
                </TripCardFooter>
              </TripCardContent>
            </TripCard>
          );
        })}
    </SimpleGrid>
  );
};
