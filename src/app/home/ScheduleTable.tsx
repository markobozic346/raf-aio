import { useMemo } from "react";
import { Box } from "@chakra-ui/react";

import MyTable from "../../components/Table";
import { useScheduleContext } from "./schedule-context";

const ScheduleTable = () => {
  const { filteredData: data } = useScheduleContext();

  const isFetched = data?.headings?.length > 0;

  const columns = useMemo(
    () => [
      {
        Header: isFetched ? data?.headings[1] : "",
        accessor: "subject",
      },
      {
        Header: isFetched ? data?.headings[2] : "",
        accessor: "year",
      },
      {
        Header: isFetched ? data?.headings[3] : "",
        accessor: "group",
      },
      {
        Header: isFetched ? data?.headings[4] : "",
        accessor: "zoomUrl",
        Cell: ({ cell }: any) => <a href={cell.value}>{cell.value}</a>,
      },
      {
        Header: isFetched ? data?.headings[5] : "",
        accessor: "eLearningUrl",
      },
      {
        Header: isFetched ? data?.headings[6] : "",
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
