import React, { useContext, useState } from 'react';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavbarText,
   Button
} from 'reactstrap';
import { NavLink} from 'react-router-dom' 
import { CartContext } from '../../CartContext';

const NavbarHome = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   const {value,setValue} = useContext(CartContext)


   return (
      <div>
         <Navbar color="light" light expand="md">
            <div className="container">
               <NavbarBrand to="/" className='nav-link'>reactstrap</NavbarBrand>
               <NavbarToggler onClick={toggle} />
               <Collapse isOpen={isOpen} navbar>
                  <Nav className="" navbar>
                     <NavItem>
                        <NavLink to="/" className='nav-link'>home</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/produk" className='nav-link'>produk</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/mahasiswa" className='nav-link'>mahasiswa</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/kelas" className='nav-link'>class</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/hooks" className='nav-link'>hooks usestate</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/useeffect" className='nav-link'>hooks useeffect</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/barang" className='nav-link'>hooks useContext </NavLink>
                     </NavItem>
                  </Nav>

                  <NavbarText className="ml-auto">
                     <Button color='success'>
                     <i className="fa fa-shopping-cart"> </i>
                     <span className="badge badge-light">{value}</span>
                     </Button>
                  </NavbarText>
               </Collapse>
            </div>
         </Navbar>
      </div>
   );
}

export default NavbarHome;