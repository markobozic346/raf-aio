class ScheduleService {
  async organizeData(data: any) {
    const rawData = await data;

    const tableHeaderRow = rawData && rawData.values[0];

    //remove rows that are not schedule data
    rawData.values.shift();
    rawData.values.shift();

    const organizedData = rawData.values.map((lecture: any) => ({
      subject: lecture[0],
      year: lecture[1],
      group: typeof lecture[2] === "string" ? lecture[2] : `${lecture[2]}`,
      zoomUrl: lecture[3],
      eLearningUrl: lecture[4],
      info: lecture[5],
    }));

    return {
      headings: tableHeaderRow,
      scheduleData: [...organizedData],
    };
  }

  async fetchScheduleData() {
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
        return response.json().then((data) => this.organizeData(data[0]));
      })
      .catch((err) => {
        console.log("Fetch Error :", err);
      });
  }
}

export const scheduleService = new ScheduleService();
