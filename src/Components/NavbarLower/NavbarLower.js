import React from 'react';
import * as Boot from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NavbarLower = () => {
  return (
    <Boot.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Boot.Navbar.Brand className='ml-5' href="#home" >Ecomerce with Scrapping</Boot.Navbar.Brand>
  <Boot.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Boot.Navbar.Collapse id="responsive-navbar-nav">
    <Boot.Nav className='ml-auto mr-5'>
      <Boot.Nav.Link href="#Home">Home</Boot.Nav.Link>
      <Boot.NavDropdown 
               title="Men Section"  id="collasible-nav-dropdown">
              <Boot.NavDropdown.Item href="#action/3.1">Clothes</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.2">Shoes</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.3">Wallets</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.3">Under Garments</Boot.NavDropdown.Item>
          </Boot.NavDropdown>

          <Boot.NavDropdown  
               title="Women Section" id="collasible-nav-dropdown">
              <Boot.NavDropdown.Item href="#action/3.1">Clothes</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.2">Shoes</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.3">Bags</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.3">Jewellery</Boot.NavDropdown.Item>
        </Boot.NavDropdown>

        <Boot.NavDropdown
              title="Kids Section" id="collasible-nav-dropdown">
              <Boot.NavDropdown.Item href="#action/3.1">Clothes</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.2">Shoes</Boot.NavDropdown.Item>
              <Boot.NavDropdown.Item href="#action/3.3">Toys</Boot.NavDropdown.Item>
        </Boot.NavDropdown>
      <Boot.Nav.Link href="#contact-us">Contact US</Boot.Nav.Link>
    </Boot.Nav>
  </Boot.Navbar.Collapse>
</Boot.Navbar>
  );
}

export default NavbarLower
