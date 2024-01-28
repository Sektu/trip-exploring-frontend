import { TripInfo } from "../../types/types";
import { HStack, Text } from "@chakra-ui/react";

export type EmissionsType = Pick<TripInfo, "co2kilograms">;
export const Emissions = ({ co2kilograms }: EmissionsType) => {
  return (
    <HStack
      borderRadius="lg"
      p="3"
      backgroundColor="gray.800"
      justifyContent="space-between"
    >
      <Text color="gray.50" fontSize="xs">
        Emissions offset:
      </Text>
      <Text color="gray.50" fontSize="xs" fontWeight={700}>
        {co2kilograms < 1000
          ? `${co2kilograms.toFixed(0)} kg`
          : `${(co2kilograms / 1000).toFixed(1)} t`}{" "}
        CO<sub>2</sub>e
      </Text>
    </HStack>
  );
};
