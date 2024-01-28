import { PropsWithChildren } from "react";
import { Stack } from "@chakra-ui/react";

export const TripCardContent = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={6}
    >
      {children}
    </Stack>
  );
};
