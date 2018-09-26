import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';
import { geraldServices, geraldTesting, geraldContent, contactSteph } from '../data.js';

class GeraldBryant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        </div>
        <br />
        <img
          src="http://forensicpsychologyexperts.com/images/dr_gerald_bryant.jpg"
          class="portrait"
          alt="Dr. Gerald J. Bryant, Forensic Psychology Expert, Immigration and Injury Law"
        />
        <h4> Meet Dr. Gerald J. Bryant</h4><br />
          {geraldContent.map(info => (
            <div key={info.header}>
              <h3>{info.header}</h3>
              <p>{info.paragraph}</p>
            </div>
           ))}
        <ul className="specials">
          <strong>Services Overview:</strong>
          {geraldServices.map(service => (
            <li key={service}>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <ul className="specials">

          <strong>Psychological Testing:</strong>
          {geraldTesting.map(test => (
            <li key={test}>
              <span>{test}</span>
            </li>
          ))}
        </ul>
        <h5>{contactSteph}</h5>
        <Footer />
      </div>
    );
  }
}

export default GeraldBryant;
