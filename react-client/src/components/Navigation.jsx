import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const navCategories = ['Home', 'Expert Services', 'Criminal Law', 'Immigration Law', 'Employment Law', 'SS Disability', 'Negligence Law', 'On The Air', 'In The News', 'Contact Us'];
const dropDownCategories = ['Dr. Stephen Reich', 'Dr. Isabel A. Rodriguez', 'Dr. Gerald Bryant', 'Dr. Judith Gibbons', 'Dr. Tom Boland', 'Dr. Andrea Hamilton', 'Dr. Harry Schmitz'];
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navCategories: navCategories, dropDownCategories: dropDownCategories };
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <ul onClick={this.props.onClickHome}>Home</ul>
          </Navbar.Brand>
        </Navbar.Header>
        <br />
        <Nav></Nav>
          {/* <a href="#" className="brand-logo">
            Logo
          </a> */}
          <ul>
            {this.state.navCategories.map(navCat => (
              // <li key={navCat}>
              //   <a href="#" onClick={() => this.props.onClick(navCat)}>{navCat}</a>
              // </li>
                  <NavItem onClick={() => this.props.onClick(navCat)} href="#">
                  {navCat}
                </NavItem>
            ))}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {this.state.dropDownCategories.map((dropDownCat, i) => (
                  // <div onChange={this.props.onClick(dropDownCat)}>
                    <MenuItem >{dropDownCat}</MenuItem>      
                  // </div>
                       
              ))}
              <MenuItem divider />
            </NavDropdown>
          </ul>
       <Nav />
      </Navbar>
    );
  }
}

export default Navigation;
