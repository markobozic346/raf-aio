import { ReactNode, useMemo, useState } from "react";
import useData from "../../hooks/useData";
import ScheduleContext from "./schedule-context";
interface Props {
  children: ReactNode;
}

const ScheduleProvider = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any>({});

  const { data } = useData();

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
