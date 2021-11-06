import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import React, { memo } from "react";

interface Props {
  text: string;
  url: string;
  color: string;
}

const UrlButton = ({ text, url, color }: Props) => {
  return (
    <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
      <Button colorScheme={color}>{text}</Button>
    </Link>
  );
};
export default memo(UrlButton);
