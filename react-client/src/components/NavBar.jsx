import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const navCategories = ['Expert Services', 'Criminal Law', 'Immigration Law', 'Employment Law', 'SS Disability', 'Negligence Law', 'On The Air', 'In The News'];
// const dropDownCategories = ['Dr. Stephen Reich', 'Dr. Isabel A. Rodríguez', 'Dr. Gerald Bryant', 'Dr. Judith Gibbons', 'Dr. Tom Boland', 'Dr. Andrea Hamilton', 'Dr. Harry Schmitz'];
const navcat = ['expertservices', 'criminallaw', 'immigration', 'employmentlaw', 'disability', 'negligence', 'ontheair', 'inthenews'];
const ddcat = ['stephenreich', 'isabelrodriguez', 'geraldbryant', 'judithgibbons', 'tomboland', 'andreahamilton', 'harryschmitz'];

class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop fluid>
        <Nav>
          <Navbar.Header>
            <Navbar.Brand>
             <Link to="/">Home</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <NavDropdown title="Experts" id="basic-nav-dropdown">
            {ddcat.map((dropDownCat, i) => (
              <MenuItem eventKey={i} key={dropDownCat}><Link to={dropDownCat}>{dropDownCat}</Link></MenuItem>      
            ))}
          </NavDropdown>
          {navcat.map(nav => <NavItem href="#" key={nav}><Link to={nav}>{nav}</Link></NavItem>)}
          <NavItem><Link to="/contactus">Contact Us</Link></NavItem>
          
       </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
