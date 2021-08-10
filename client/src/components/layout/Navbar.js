import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state) => state.cart.data);

  return (
    <div>
      <Navbar bg="primary" variant="dark" className="fixed-top">
        <LinkContainer to="/">
          <Navbar.Brand>E-Commerce</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          {/* 
          <FormControl
            type='search'
            placeholder='Search'
            className='mr-sm-2'
            onChange={(e) => setSearch(e.target.value)}
          />
          <LinkContainer to={`/search/${search}`}>
            <Button variant='outline-light'>Search</Button>
          </LinkContainer> */}
        </Nav>
        <Nav>
          <LinkContainer to={`/admin`}>
            <Nav.Link href="/login">Admin Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              {" "}
              Cart <Badge variant="secondary">{cartItems.length}</Badge>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div> //Login will disappear once logged in
  );
};

export default NavbarComponent;
