import { TripInfo } from "../../types/types";
import { Stack, Heading, Text } from "@chakra-ui/react";

export type TripCardHeaderProps = Pick<
  TripInfo,
  "title" | "numberOfCountries" | "days"
>;
export const TripCardHeader = ({
  title,
  numberOfCountries,
  days,
}: TripCardHeaderProps) => {
  return (
    <Stack justifyContent="center" alignItems="center" pt="4">
      <Heading color={"gray.50"} fontSize="lg" letterSpacing="wide">
        {title}
      </Heading>
      <Text color={"gray.50"} fontSize="xs">
        {numberOfCountries} Countries, {days} days
      </Text>
    </Stack>
  );
};
