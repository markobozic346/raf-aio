import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box display="flex" maxWidth="1350px" flexDirection="column" mx="auto">
      {children}
    </Box>
  );
};

export default Layout;
