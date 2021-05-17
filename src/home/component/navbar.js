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
                  <Nav className="" navbar>
                     <NavItem>
                        <NavLink href="/">home</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/produk">produk</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/mahasiswa">mahasiswa</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/kelas">class</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/hooks">hooks usestate</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/useeffect">hooks useeffect</NavLink>
                     </NavItem>
                  </Nav>
               </Collapse>
            </div>
         </Navbar>
      </div>
   );
}

export default NavbarHome;