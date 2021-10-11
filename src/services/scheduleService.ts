class ScheduleService {
  async fetchScheduleData() {
    const url =
      "https://script.google.com/macros/s/AKfycbx-IHfmCLu265z22d38-A-F-ZcQEBSmBesbOa1Z-d8dnZfzoPW36tIvQWygvjRF3hr7/exec";

    return fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        const jsonData = response.json();
        return jsonData.then((data) => data[0]);
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }
}

export const scheduleService = new ScheduleService();
