import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const routePosts = () => props.history.replace({ pathname: "/posts" })
  const routeAlbums = () => props.history.replace({ pathname: "/albuns" })
  const todos = () => props.history.replace({ pathname: "/" })
  
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Framework</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={todos}>Tarefas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={routeAlbums}>Albuns</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={routePosts}>Posts</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;