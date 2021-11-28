import Layout from "../components/Layout";
import ScheduleProvider from "./home/ScheduleProvider";
import ScheduleTable from "./home/ScheduleTable";

function App() {
  return (
    <Layout>
      <ScheduleProvider>
        <ScheduleTable />
      </ScheduleProvider>
    </Layout>
  );
}

export default App;
