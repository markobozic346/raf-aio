import { ChangeEvent, useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useScheduleContext } from "../app/home/schedule-context";

const SearchInput = () => {
  const [savedSearch, setSavedSearch] = useState<string | undefined | null>();

  const { onSearch } = useScheduleContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    localStorage.setItem("group", e.target.value);
  };
  useEffect(() => {
    const group = localStorage.getItem("group");
    setSavedSearch(group);
  }, []);

  savedSearch && onSearch(savedSearch);

  return (
    <Box p="20px">
      <Input
        w="100%"
        placeholder="unesi ime grupe npr 1s1"
        defaultValue={savedSearch ? savedSearch : ""}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchInput;
