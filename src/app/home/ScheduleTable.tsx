import { useMemo } from "react";
import { Box } from "@chakra-ui/react";

import MyTable from "../../components/table/Table";
import { useScheduleContext } from "./schedule-context";
import UrlButton from "../../components/UrlButton";
import LoadingAnimation from "../../components/loading/LoadingAnimation";
import SearchInput from "../../components/SearchInput";

const ScheduleTable = () => {
  const { filteredData: data } = useScheduleContext();

  const isFetched = data?.headings?.length > 0;

  const columns = useMemo(
    () => [
      {
        Header: "Predmet",
        accessor: "subject",
      },
      {
        Header: "Godina",
        accessor: "year",
      },
      {
        Header: "Grupa",
        accessor: "group",
      },
      {
        Header: "Zoom Url",
        accessor: "zoomUrl",
        Cell: ({ cell }: any) =>
          cell.value && (
            <UrlButton text="Zoom Url" url={cell.value} color="blue" />
          ),
      },
      {
        Header: "E-learning",
        accessor: "eLearningUrl",
        Cell: ({ cell }: any) =>
          cell.value && (
            <UrlButton text="E-learning" url={cell.value} color="orange" />
          ),
      },
      {
        Header: "Napomene",
        accessor: "info",
      },
    ],
    []
  );
  return (
    <Box>
      {isFetched ? (
        <>
          <SearchInput />
          <MyTable columns={columns} data={data.scheduleData} />{" "}
        </>
      ) : (
        <LoadingAnimation />
      )}
    </Box>
  );
};

export default ScheduleTable;
