import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const headerStyle = {
    marginBottom: "100px",
  };

  return (
    <div style={headerStyle}>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Social Buddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/post">Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
