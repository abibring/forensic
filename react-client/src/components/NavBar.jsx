import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const navCategories = ['Expert Services', 'Criminal Law', 'Immigration Law', 'Employment Law', 'SS Disability', 'Negligence Law', 'On The Air', 'In The News'];
const dropDownCategories = ['Dr. Stephen Reich', 'Dr. Isabel A. Rodriguez', 'Dr. Gerald Bryant', 'Dr. Judith Gibbons', 'Dr. Tom Boland', 'Dr. Andrea Hamilton', 'Dr. Harry Schmitz'];
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navCategories: navCategories, dropDownCategories: dropDownCategories };
  }

  render() {
    const { onClick } = this.props;
    return (
      <Navbar inverse collapseOnSelect fixedTop fluid>
        <Nav>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={() => onClick('Home')}>Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <NavDropdown title="Experts" id="basic-nav-dropdown">
            {this.state.dropDownCategories.map((dropDownCat, i) => (
              <MenuItem onClick={() => onClick(dropDownCat)} eventKey={i} key={dropDownCat}>{dropDownCat}</MenuItem>      
            ))}
          </NavDropdown>
          {this.state.navCategories.map(navCat => <NavItem  href="#" key={navCat} onClick={() => onClick(navCat)}>{navCat}</NavItem>)}
          <NavItem href="#" onClick={() => onClick('Contact Us')}>Contact Us</NavItem>
       </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
