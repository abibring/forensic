import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';
import { andreaContent, contactSteph }  from '../data.js';

class AndreaHamilton extends React.Component {
  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        </div>
          <img
            src="http://forensicpsychologyexperts.com/images/dr_andrea_hamilton.jpg"
            className="portrait"
            alt="Dr. Andrea Hamilton, Forensic Psychology Expert"
          />
          <h2>Meet Dr. Andrea Hamilton</h2>
        <h4>Professional profile coming soon.</h4>
        {andreaContent.map(content => (
          <div key={content.header}>
            <h3>{content.header}</h3>
            <p>{content.paragraph}</p>
          </div>
        ))}<br />
        <h5>{contactSteph}</h5>
        <Footer />
      </div>
    );
  }
}

export default AndreaHamilton;
