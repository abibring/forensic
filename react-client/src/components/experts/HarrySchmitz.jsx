import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';
import { harryContent } from '../data.js';

class HarrySchmitz extends React.Component {
  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        </div>
        <br />
        <h3>
          <img
            src="http://forensicpsychologyexperts.com/images/dr_harry_schmitz.jpg"
            className="portrait"
            alt="Dr. Harry Schmitz, Forensic Psychology Expert"
          />
          Meet Dr. Harry Schmitz
        </h3>
        <h5>Professional profile coming soon.</h5>
        {harryContent.map(content => (
          <div key={content.header}>
            <h4>{content.header}</h4>
            <p>{content.paragraph}</p>
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

export default HarrySchmitz;
