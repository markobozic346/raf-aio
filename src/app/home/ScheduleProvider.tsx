import { ReactNode, useEffect, useState } from "react";
import { scheduleService } from "../../services/scheduleService";
import ScheduleContext, { DataType } from "./schedule-context";
interface Props {
  children: ReactNode;
}

const ScheduleProvider = (props: Props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getScheduleData();
  }, []);
  const getScheduleData = async () => {
    const temp = await scheduleService.fetchScheduleData();
    setData(temp);
  };
  return (
    <ScheduleContext.Provider value={{ data }}>
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleProvider;
