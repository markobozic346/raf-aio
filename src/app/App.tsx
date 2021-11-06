import SearchInput from "../components/SearchInput";
import ScheduleProvider from "./home/ScheduleProvider";
import ScheduleTable from "./home/ScheduleTable";

function App() {
  return (
    <ScheduleProvider>
      <SearchInput />
      <ScheduleTable />
    </ScheduleProvider>
  );
}

export default App;
