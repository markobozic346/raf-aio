import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { scheduleService } from "../services/scheduleService";

function App() {
  const [data, setData] = useState<any>();

  //refactor this later
  useEffect(() => {
    const temp = scheduleService.fetchScheduleData();
    temp.then((data) => setData(data));
  }, []);
  console.log("ff", data);
  return <Box></Box>;
}

export default App;
