import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
export const NavBar = () => {
  return (
    <div className="Nav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">EVAX</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">informations</Nav.Link>
          <Nav.Link href="#pricing">call us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};
