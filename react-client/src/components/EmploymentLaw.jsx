import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { employmentLawContent } from './data.js';

class EmploymentLaw extends React.Component {
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
        <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" alt="" />
        <img src="http://forensicpsychologyexperts.com/images/3_employment_psychologists.jpg" width="540" height="200" alt="Employment Law Expert Psychologists" border="0" />
        {employmentLawContent.map(content => (
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

export default EmploymentLaw;