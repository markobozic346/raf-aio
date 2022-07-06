import { useQuery } from "react-query";
import { dataService } from "../services/dataService";

const fetchScheduleData = () => {
  //TODO: Public url, but should be moved to .env anyway
  const url =
    "https://script.google.com/macros/s/AKfycbx-IHfmCLu265z22d38-A-F-ZcQEBSmBesbOa1Z-d8dnZfzoPW36tIvQWygvjRF3hr7/exec";

  return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Return data
      return response.json().then((data) => dataService.organizeData(data[0]));
    })
    .catch((err) => {
      console.log("Fetch Error :", err);
    });
};

const useData = () => {
  const res = useQuery("scheduleData", fetchScheduleData);

  return res;
};

export default useData;
