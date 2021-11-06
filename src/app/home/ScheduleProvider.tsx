import { ReactNode, useEffect, useMemo, useState } from "react";
import { scheduleService } from "../../services/scheduleService";
import ScheduleContext from "./schedule-context";
interface Props {
  children: ReactNode;
}

const ScheduleProvider = (props: Props) => {
  //
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any>({});
  //Data load
  useEffect(() => {
    getScheduleData();
  }, []);

  //filter data
  useMemo(() => {
    const filtered =
      data &&
      data.scheduleData.length > 0 &&
      data.scheduleData.filter((lecture: any) =>
        lecture.group.includes(search)
      );
    setFilteredData({ ...data, scheduleData: filtered });
  }, [data, search]);

  //fetch data
  const getScheduleData = async () => {
    const temp = await scheduleService.fetchScheduleData();

    setData(temp);
    setFilteredData(temp);
  };

  // methods
  const onSearch = (value: string) => {
    setTimeout(() => {
      setSearch(value);
    }, 1000);
  };

  return (
    <ScheduleContext.Provider value={{ filteredData, onSearch }}>
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleProvider;
