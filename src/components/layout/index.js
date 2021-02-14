import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <Container className="p-5" fluid>
        {props.children}
      </Container>
    </>
  );
}
