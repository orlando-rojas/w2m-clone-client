import React from "react";
import ScheduleSelector from "react-schedule-selector";

export default function Schedule({ startDate, minTime, maxTime }) {
  const [schedule, setSchedule] = React.useState();

  function handleChange(e) {
    setSchedule(e);
    console.log(schedule);
  }

  return (
    <ScheduleSelector
      startDate={startDate}
      selection={schedule}
      numDays={5}
      minTime={minTime}
      maxTime={maxTime}
      hourlyChunks={2}
      onChange={handleChange}
      dateFormat={"MMM D dddd"}
      timeFormat={"h:mm a"}
      unselectedColor={"#FDDEDE"}
      selectedColor={"#339900"}
    />
  );
}
