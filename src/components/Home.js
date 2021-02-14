import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import HourSelect from "./common/HourSelect";
import MultipleCalendar from "./common/MultipleCalendar";
import TimeZoneSelect from "./common/TimeZoneSelect";
import { useHistory } from "react-router";

export default function Home() {
  const [selectedDates, setSelectedDates] = React.useState([]);
  const [disabled, setDisabled] = React.useState(false);

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    validationSchema: schema,
    reValidateMode: "onSubmit",
  });

  async function createEvent(data) {
    setDisabled(true);
    try {
      console.log(data);
      history.push("/event");
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }

  console.log("selected dates", selectedDates);

  return (
    <Container>
      <Form onSubmit={handleSubmit(createEvent)} autoComplete="off" noValidate>
        <Row>
          <Col>
            <h3>What dates might work?</h3>
            <p className="w-75 p3">
              Click and drag dates to choose possibilities. <br />
              Click and drag labels to shift the calendar.
            </p>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label sm="2" className="m-0 d-flex align-items-center pl-3">
                Survey using:
              </Form.Label>
              <Col sm="6">
                <Form.Control as="select" ref={register} name={"type"}>
                  <option>Specific Dates</option>
                  <option>Days of the Week</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <MultipleCalendar
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
            />
          </Col>
          <Col>
            <h3>What times might work?</h3>
            <Form.Group
              as={Row}
              controlId="formPlaintextEmail"
              className="mt-4"
            >
              <Form.Label column sm="4">
                No earlier than:
              </Form.Label>
              <Col sm="4">
                <HourSelect
                  reference={register}
                  name={"minTime"}
                  defaultValue={9}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formPlaintextEmail"
              className="mt-4"
            >
              <Form.Label column sm="4">
                No later than:
              </Form.Label>
              <Col sm="4">
                <HourSelect
                  reference={register}
                  name={"maxTime"}
                  defaultValue={20}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formPlaintextEmail"
              className="mt-4"
            >
              <Form.Label column sm="4">
                In:
              </Form.Label>
              <Col sm="4">
                <TimeZoneSelect />
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event name ..."
                style={{ width: "70%" }}
                ref={register}
                name={"name"}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={disabled}>
              Create Event
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
