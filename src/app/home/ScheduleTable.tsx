import { useMemo } from "react";
import { Box, Button } from "@chakra-ui/react";

import MyTable from "../../components/Table";
import { useScheduleContext } from "./schedule-context";
import UrlButton from "../../components/UrlButton";

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
      {isFetched && <MyTable columns={columns} data={data.scheduleData} />}
    </Box>
  );
};

export default ScheduleTable;
