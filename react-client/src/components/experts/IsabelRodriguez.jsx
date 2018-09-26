import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';
import { isabelContent } from '../data.js';

class IsabelRodriguez extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" alt="" />
        </div>
          <img
            src="http://forensicpsychologyexperts.com/images/dr_isabel_rodriguez.jpg"
            className="portrait"
            alt="Dr. Isabel A. Rodriguez, Clinial Neuropsychologist"
            width="140"
            height="195"
          />
          <h2>Meet Dr. Isabel A. Rodríguez</h2>
          <h3>Clinical Neuropsychologist</h3><br />
          
          {isabelContent.map(content => (
            <div key={content.header}>
              <h3>{content.header}</h3>
              <p>{content.paragraph}</p>
            </div>
           ))}
        <Footer />
      </div>
    );
  }
}

export default IsabelRodriguez;
