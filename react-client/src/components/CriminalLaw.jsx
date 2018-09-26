import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { criminalLawList } from './data.js';


class CriminalLaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
        </div>
        <div>
          <img src="http://forensicpsychologyexperts.com/images/settlements_520.jpg" />
          <br />
          <h6>Forensic Psychology Group experts testify in courtrooms around the nation.</h6>
          {criminalLawList.map(list => (
            <div key={list.header}>
              <h3>{list.header}</h3>
              <p>{list.paragraph}</p>
            </div>
          ))}
          </div> <br />   
          <Footer />
        </div>
    );
  }
}

export default CriminalLaw;