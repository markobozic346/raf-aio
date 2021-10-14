import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { scheduleService } from "../services/scheduleService";
import MyTable from "../components/Table";
import React from "react";

interface Props {}

const ScheduleTable = (props: Props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getScheduleData();
  }, []);
  console.log(data);
  const getScheduleData = async () => {
    const temp = await scheduleService.fetchScheduleData();
    setData(temp);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: data?.headings[0],
        accessor: "subject",
      },
      {
        Header: data?.headings[1],
        accessor: "year",
      },
      {
        Header: data?.headings[2],
        accessor: "group",
      },
      {
        Header: data?.headings[3],
        accessor: "zoomUrl",
        Cell: ({ cell }: any) => <a href={cell.value}>{cell.value}</a>,
      },
      {
        Header: data?.headings[4],
        accessor: "eLearningUrl",
      },
      {
        Header: data?.headings[5],
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
