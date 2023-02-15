import React from "react";
import { Link ,useLocation } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let location = useLocation();

  
  return (
    <Navbar color="primary" dark expand="md">
      <Collapse navbar isOpen={isOpen} style={{paddingLeft:'91%'}}>
        <Nav className="me-auto" navbar>
            Header
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
