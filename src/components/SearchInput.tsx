import { ChangeEvent, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useScheduleContext } from "../app/home/schedule-context";

interface Props {}

const SearchInput = (props: Props) => {
  const { onSearch } = useScheduleContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Box>
      <Input
        w="100%"
        placeholder="unesi ime grupe npr 1s1"
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchInput;
