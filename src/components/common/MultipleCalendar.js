import { Button } from "react-bootstrap";
import { Calendar } from "react-multi-date-picker";

export default function MultipleCalendar({ selectedDates, setSelectedDates }) {
  return (
    <Calendar
      onlyShowInRangeDates={true}
      minDate={new Date()}
      value={selectedDates}
      onChange={setSelectedDates}
      //plugins={[<DatePanel />]}
      multiple
      sort
    >
      <Button style={{ margin: "5px" }} onClick={() => setSelectedDates(null)}>
        Clear
      </Button>

      <Button
        style={{ margin: "5px" }}
        onClick={() => setSelectedDates(new Date())}
      >
        Today
      </Button>
    </Calendar>
  );
}
