import { useMemo } from "react";
import { Box } from "@chakra-ui/react";

import MyTable from "../../components/Table";
import { useScheduleContext } from "./schedule-context";

const ScheduleTable = () => {
  const { filteredData: data } = useScheduleContext();

  const columns = useMemo(
    () => [
      {
        Header: data?.headings[0] || "",
        accessor: "subject",
      },
      {
        Header: data?.headings[1] || "",
        accessor: "year",
      },
      {
        Header: data?.headings[2] || "",
        accessor: "group",
      },
      {
        Header: data?.headings[3] || "",
        accessor: "zoomUrl",
        Cell: ({ cell }: any) => <a href={cell.value}>{cell.value}</a>,
      },
      {
        Header: data?.headings[4] || "",
        accessor: "eLearningUrl",
      },
      {
        Header: data?.headings[5] || "",
        accessor: "info",
      },
    ],
    [data]
  );
  return (
    <Box>{data && <MyTable columns={columns} data={data.scheduleData} />}</Box>
  );
};

export default ScheduleTable;
