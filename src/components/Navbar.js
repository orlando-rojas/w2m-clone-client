import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavItem({ href, children, ...props }) {
  return (
    <Nav.Item className="p-1 mx-5">
      <NavLink
        exact
        to={href}
        activeClassName="font-weight-bold border-bottom border-success"
        className="text-white "
      >
        {children}
      </NavLink>
    </Nav.Item>
  );
}

export default function Navbar() {
  return (
    <Nav className="bg-dark p-2 justify-content-center align-items-center">
      <NavItem href="/about">About</NavItem>
      <NavItem href="/">Plan a new event</NavItem>
      <NavItem href="/event">Event</NavItem>
    </Nav>
  );
}
