import { ChangeEvent, memo, useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useScheduleContext } from "../app/home/schedule-context";

const SearchInput = () => {
  const [savedSearch, setSavedSearch] = useState<string | undefined | null>();

  const { onSearch } = useScheduleContext();

  //on change save to storage and load
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("group", e.target.value);
    setSavedSearch(getLocalValue())
  };
  //on load get stored value if exist
  useEffect(() => {
    setSavedSearch(getLocalValue());
  }, []);

  const getLocalValue = () => {
    return localStorage.getItem("group")
  }

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

export default memo(SearchInput);
