import { TripInfo } from "../../types/types";
import { HStack, Text } from "@chakra-ui/react";
import { RatingStars } from "./rating-stars.component";

export type RatingType = Pick<TripInfo, "rating">;
export const Rating = ({ rating }: RatingType) => {
  return (
    <HStack
      borderTopRadius="lg"
      borderBottom="none"
      px={3}
      py={1}
      backgroundColor="gray.50"
      justifyContent="space-between"
    >
      <Text textColor="black" fontSize="xs" fontWeight={700}>
        Trip rating
      </Text>

      <RatingStars rating={rating} />
    </HStack>
  );
};
