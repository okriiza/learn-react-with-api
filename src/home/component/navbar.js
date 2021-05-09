import React, { useState } from 'react';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink
} from 'reactstrap';

const NavbarHome = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return (
      <div>
         <Navbar color="light" light expand="md">
            <div className="container">
               <NavbarBrand href="/">reactstrap</NavbarBrand>
               <NavbarToggler onClick={toggle} />
               <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                     <NavItem>
                        <NavLink href="/">home</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/produk">produk</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/mahasiswa">mahasiswa</NavLink>
                     </NavItem>
                  </Nav>
               </Collapse>
            </div>
         </Navbar>
      </div>
   );
}

export default NavbarHome;