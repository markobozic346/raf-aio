import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import ScheduleProvider from "./home/ScheduleProvider";
import ScheduleTable from "./home/ScheduleTable";

function App() {
  return (
    <Layout>
      <ScheduleProvider>
        <SearchInput />
        <ScheduleTable />
      </ScheduleProvider>
    </Layout>
  );
}

export default App;
