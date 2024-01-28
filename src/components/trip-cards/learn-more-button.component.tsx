import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export type LearnMoreButtonType = {
  path: string;
};
export const LearnMoreButton = ({ path }: LearnMoreButtonType) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="solid"
      colorScheme="blue"
      size="sm"
      fontWeight={400}
      onClick={() => {
        navigate(path);
      }}
    >
      Learn more
    </Button>
  );
};
