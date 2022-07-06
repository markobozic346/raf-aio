class DataService {
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
}

export const dataService = new DataService();
