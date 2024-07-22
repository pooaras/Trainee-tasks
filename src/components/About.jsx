import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="bg-transparent border-0 text-black"
      >
        Copilot
      </Button>
        <i class={`bi bi-chevron-${open ? 'up' : 'down'}`}></i>
      <Collapse in={open}>
      <div style={{ maxHeight: "300px", width: '100px',overflowY: "auto" }}>
  <h4 id="item-1">Item 1</h4>
  <h5 id="item-1-1">Item 1-1</h5>
  <h5 id="item-1-2">Item 1-2</h5>
  <h4 id="item-2">Item 2</h4>
  <h4 id="item-3">Item 3</h4>
  <h5 id="item-3-1">Item 3-1</h5>
  <h5 id="item-3-2">Item 3-2</h5>
</div>
      </Collapse>
      <li>list</li>
      <li>list</li>
      <li>list</li>
      <li>list</li>
      <li>list</li>
      <li>list</li>
      <li>list</li>
      <li>list</li>
    </div>
  );
};

export default About;
