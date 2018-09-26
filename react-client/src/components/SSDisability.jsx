import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { disabilityBodyText, disabilityTitleText, disabilityDisorders } from './data.js';

class SSDisability extends React.Component {
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
        <img
          src="http://forensicpsychologyexperts.com/images/header_slogan.gif"
          alt=""
        />
        <img
          src="http://forensicpsychologyexperts.com/images/disability_psychologists.jpg"
          alt=""
          border="0"
        />
        <h3>{disabilityTitleText[0]}</h3>
        <p>{disabilityBodyText[0]}</p>
        <h3>{disabilityTitleText[1]}</h3>
        <p>{disabilityBodyText[1]}</p>
        <div>
          {disabilityDisorders.map(disorder => <li>{disorder}</li>)}
        </div>
        <h3>{disabilityTitleText[2]}</h3>
        <p>{disabilityBodyText[2]}</p>
        <h3>{disabilityTitleText[3]}</h3>
        <p>{disabilityBodyText[3]}</p>
        <Footer />
      </div>
    );
  }
}

export default SSDisability;
