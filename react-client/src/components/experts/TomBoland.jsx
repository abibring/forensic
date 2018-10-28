import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';
import { tomContent, tomListItems, contactSteph } from '../data.js';

class TomBoland extends React.Component {
  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        </div>
        <br />
          <img
            src="http://forensicpsychologyexperts.com/images/dr_thomas_boland.jpg"
            className="portrait"
            alt="Dr. Thomas Boland, Forensic Psychology Expert in Injury and Malpractice Law"
          />
         <h2>Meet Dr. Thomas Boland</h2>
        {tomContent.map(content => (
          <div key={content.header}>
            <h3>{content.header}</h3>
            <p>{content.paragraph}</p>
          </div>
        ))}
        <ul className="specials">
          {tomListItems.map(item => (
            <li key={item}><span>{item}</span></li>
          ))}
        </ul>
        <h5 style={{ marginTop: 10 }}>{contactSteph}</h5><br />
        <Footer />
      </div>
    );
  }
}

export default TomBoland;
