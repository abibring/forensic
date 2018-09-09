import React from 'react';

const navCat = ['Home', 'Expert Services', 'Criminal Law', 'Immigration Law', 'Employment Law', 'SS Disability', 'Negligence Law', 'Dr. Stephen Reich', 'Dr. Isabel A. Rodriguez', 'Dr. Gerald Bryant', 'Dr. Judith Gibbons', 'Dr. Tom Boland', 'Dr. Andrea Hamilton', 'Dr. Harry Schmitz', 'On The Air', 'In The News', 'Contact Us']
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navCategories: navCat }
  }
  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="/">Navbar</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>

      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item active">
      //         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/">Link</a>
      //       </li>
      //       <li className="nav-item dropdown">
      //         <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //           Dropdown
      //         </a>
      //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <a className="dropdown-item" href="/">Action</a>
      //           <a className="dropdown-item" href="/">Another action</a>
      //           <div className="dropdown-divider"></div>
      //           <a className="dropdown-item" href="/">Something else here</a>
      //         </div>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link disabled" href="/">Disabled</a>
      //       </li>
      //     </ul>
      //     <form className="form-inline my-2 my-lg-0">
      //       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      //     </form>
      //   </div>
      // </nav>

      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.state.navCategories.map(navCat => (
              <li key={navCat}>
                <a href="#">{navCat}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
