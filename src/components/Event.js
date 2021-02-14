import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import LoginForm from "./common/LoginForm";
import Schedule from "./common/Schedule";
import TimeZoneSelect from "./common/TimeZoneSelect";

export default function Event() {
  const [userLogged, setUserLogged] = React.useState(false);
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            <h1>Event's Name</h1>
            <p className="w-75 p3">
              To invite people to this event, you can email them, send them a
              Facebook message, or just direct them to
              https://www.when2meet.com/?11044027-dahsX
            </p>
          </div>
          <Form.Group as={Row} controlId="formPlaintextEmail" className="mt-4">
            <Form.Label column sm="3">
              Your Time Zone:
            </Form.Label>
            <Col sm="4">
              <TimeZoneSelect />
            </Col>
          </Form.Group>
          {userLogged ? (
            <>
              <div className="d-flex flex-column align-items-center pb-3">
                <h3>User's availability</h3>
                <div className="d-flex align-items-center">
                  Unavailable <Square />
                  Available <Square available />
                </div>
              </div>
              <Schedule />
            </>
          ) : (
            <LoginForm setUserLogged={setUserLogged} />
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

const Square = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => (props.available ? "#339900" : "#FDDEDE")};
  border: 1px solid black;
  margin: 0 10px;
`;
