import React from "react";
import { Button } from "react-bootstrap";

export default function GoogleCalendar() {
  const gapi = window.gapi;

  const CLIENT_ID =
    "775185321623-q6r3fupi3v85sn1vc2t7jvi5a1q6jt1m.apps.googleusercontent.com";
  const API_KEY = "AIzaSyAf8I_5uGP4fS_1vOnNQlLFM2WxyO-053Y";
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  function handleClick() {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: "W2M-CLONE-INVITATION",
            description: "W2M-CLONE-TEST",
            start: {
              dateTime: "2021-02-15T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2021-02-15T17:00:00-09:00",
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
            attendees: [{ email: "orlandorm0117@gmail.com" }],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });
        });
    });
  }

  return <Button onClick={handleClick}>Add Event to Google Calendar</Button>;
}
