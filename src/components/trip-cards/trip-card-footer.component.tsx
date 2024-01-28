import { PropsWithChildren } from "react";
import { Stack } from "@chakra-ui/react";

export const TripCardFooter = ({ children }: PropsWithChildren) => {
  return (
    <Stack w="100%" spacing={2} px="2">
      {children}
    </Stack>
  );
};
