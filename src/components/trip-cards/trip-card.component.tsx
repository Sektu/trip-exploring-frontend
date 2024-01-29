import React, { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import { TripInfo } from "../../types/types";

export type TripCardProps = PropsWithChildren<
  Pick<TripInfo, "id" | "photoUrl">
>;
export const TripCard = ({ children, id, photoUrl }: TripCardProps) => {
  return (
    <Box
      key={id}
      p="2"
      maxW="xs"
      minW="xs"
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor="gray.50"
    >
      <Box
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        backgroundSize="cover"
        paddingBottom={-2}
        borderBottom="none"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${photoUrl})`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
