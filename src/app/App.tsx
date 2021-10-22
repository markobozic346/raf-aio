import ScheduleProvider from "./home/ScheduleProvider";
import ScheduleTable from "./home/ScheduleTable";

function App() {
  return (
    <ScheduleProvider>
      <ScheduleTable />
    </ScheduleProvider>
  );
}

export default App;
