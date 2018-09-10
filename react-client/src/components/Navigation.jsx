import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const navCategories = ['Home', 'Expert Services', 'Criminal Law', 'Immigration Law', 'Employment Law', 'SS Disability', 'Negligence Law', 'On The Air', 'In The News'];
const dropDownCategories = ['Dr. Stephen Reich', 'Dr. Isabel A. Rodriguez', 'Dr. Gerald Bryant', 'Dr. Judith Gibbons', 'Dr. Tom Boland', 'Dr. Andrea Hamilton', 'Dr. Harry Schmitz'];
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navCategories: navCategories, dropDownCategories: dropDownCategories };
  }

  render() {
    const { onClick } = this.props;
    return (
      <Navbar inverse collapseOnSelect fixedTop fluid>
        <Nav>
          {this.state.navCategories.map(navCat => <NavItem  href="#" onClick={() => onClick(navCat)}>{navCat}</NavItem>)}
          <NavDropdown title="Experts" id="basic-nav-dropdown">
            {this.state.dropDownCategories.map((dropDownCat, i) => (
              <MenuItem onClick={() => onClick(dropDownCat)} eventKey={i}>{dropDownCat}</MenuItem>      
            ))}
            <MenuItem divider />
          </NavDropdown>
          <NavItem href="#" onClick={() => onClick('Contact Us')}>Contact Us</NavItem>
       </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
