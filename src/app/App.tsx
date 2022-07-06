import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import ScheduleProvider from "./home/ScheduleProvider";
import ScheduleTable from "./home/ScheduleTable";

const queryClient = new QueryClient();

function App() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ScheduleProvider>
          <ScheduleTable />
        </ScheduleProvider>
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
