import { TripInfo } from "../../types/types";
import { HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export type RatingStarsType = Pick<TripInfo, "rating">;
export const RatingStars = ({ rating }: RatingStarsType) => {
  return (
    <HStack>
      <Text textColor="black" fontSize="md" paddingBottom={2}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < Math.round(rating) ? "yellow.300" : "gray.300"}
            />
          ))}
      </Text>
      <Text textColor="black" fontSize="xs" fontWeight={700}>
        {rating.toFixed(1)}
      </Text>
    </HStack>
  );
};
