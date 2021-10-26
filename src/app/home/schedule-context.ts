import { createContext, useContext } from "react";

interface ScheduleContextType {
  // data: DataType | undefined;
  filteredData: any;
  onSearch: (value: string) => void;
}

export type DataType = {
  headings: string[];
  scheduleData: {
    eLearningUrl: string;
    group: string;
    info: string;
    subject: string;
    year: number;
    zoomUrl: string;
  };
};
const ScheduleContext = createContext<ScheduleContextType | null>(null);

export const useScheduleContext = () => {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error(
      "useScheduleContext can be used only within ScheduleProvider"
    );
  }
  return context;
};

export default ScheduleContext;
