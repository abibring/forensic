import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { negligenceHeader, negligenceListItems, negligenceNumber, negligenceText } from './data.js';

class Negligence extends React.Component {
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
        <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        <h3>{negligenceHeader[0]}</h3>
        <p>{negligenceText[0]}</p>
        <div width="100%">
          {negligenceListItems.map(item => <li key={item}>{item}</li>)}
        </div>
        <h3>{negligenceHeader[1]}</h3>
        <p>{negligenceText[1]}</p>
        <h3>{negligenceHeader[2]}</h3>
        <p>{negligenceText[2]}</p>
        <h3>{negligenceHeader[3]}</h3>
        <p>{negligenceText[3]}</p>
        <h3>{negligenceHeader[4]}</h3>
        <p>{negligenceText[4]}</p>
        <h3>{negligenceHeader[5]}</h3>
        <p>{negligenceText[5]}<strong>{negligenceNumber[0]}</strong>.</p>
        <Footer />
      </div>
    );
  }
}

export default Negligence;
