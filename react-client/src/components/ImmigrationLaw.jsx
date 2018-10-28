import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { immigrationServiceList, immigrationContent } from './data.js';

class ImmigrationLaw extends React.Component {
  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
        </div>
        <div>
          <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif"/>
          <br />
          <img src="http://forensicpsychologyexperts.com/images/immigration_law_forensic_psychologists.jpg" alt="2014 AILA Silver Supporter"/>
        </div>
        <br />
        <h3>Immigration Law</h3>
          <p>The Forensic Psychology Group provides law firms and attorneys nationwide with expert forensic psychological services in the areas of immigration law, including:</p>
          <ul>
            {immigrationServiceList.map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <ol>
            {immigrationContent.map((content) => (
              <ul>
                <h3>{content.headher}</h3>
                <p>{content.paragraph}</p>
              </ul>
            ))}
          </ol>
          <Footer />
      </div>
    )
  }
};

export default ImmigrationLaw;