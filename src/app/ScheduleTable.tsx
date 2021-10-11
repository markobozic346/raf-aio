import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { scheduleService } from "../services/scheduleService";
import MyTable from "../components/Table";

interface Props {}

const ScheduleTable = (props: Props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getScheduleData();
  }, []);

  const getScheduleData = async () => {
    const temp = await scheduleService.fetchScheduleData();
    setData(temp);
  };

  return <Box>{data && <MyTable tData={data} />}</Box>;
};

export default ScheduleTable;
