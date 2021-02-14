import { Button } from "react-bootstrap";
import { Calendar, DateObject } from "react-multi-date-picker";
import { DatePanel } from "react-multi-date-picker/plugins";

export default function MultipleCalendar({ selectedDates, setSelectedDates }) {
  function handleToday() {
    const today = new DateObject();
    setSelectedDates([...selectedDates, today]);
  }
  return (
    <Calendar
      className="mb-5"
      onlyShowInRangeDates={true}
      minDate={new Date()}
      value={selectedDates}
      onChange={setSelectedDates}
      plugins={[<DatePanel />]}
      multiple
      sort
    >
      <Button style={{ margin: "5px" }} onClick={() => setSelectedDates([])}>
        Clear
      </Button>

      <Button style={{ margin: "5px" }} onClick={handleToday}>
        Today
      </Button>
    </Calendar>
  );
}
