import { PropsWithChildren } from "react";
import { SimpleGrid, Center, Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { TripInfo } from "../../types/types";
import { TripCard } from "./trip-card.component";
import { TripCardContent } from "./trip-card-content.component";
import { TripCardHeader } from "./trip-card-header.component";
import { TripCardFooter } from "./trip-card-footer.component";
import { LearnMoreButton } from "./learn-more-button.component";
import { Emissions } from "./emissions.component";
import { Rating } from "./rating.component";
import { TripCardsLoader } from "./trip-cards-loader.component";

export type TripCardsGridProps = PropsWithChildren<{ tripInfos: TripInfo[] }>;
export const TripCardsGrid = ({ tripInfos }: TripCardsGridProps) => {
  const [isSmallerThan400] = useMediaQuery("(max-width: 450px)");

  const Wrapper = isSmallerThan400 ? Center : Box;

  return (
    <Wrapper backgroundColor="gray.200" py={["5", "50"]} px={["0", "200"]}>
      <SimpleGrid spacing={4} minChildWidth="300px">
        {tripInfos.length > 0 ? (
          tripInfos.map((tripInfo) => {
            return (
              <TripCard
                key={tripInfo.id}
                id={tripInfo.id}
                photoUrl={tripInfo.photoUrl}
              >
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
          })
        ) : (
          <TripCardsLoader />
        )}
      </SimpleGrid>
    </Wrapper>
  );
};
