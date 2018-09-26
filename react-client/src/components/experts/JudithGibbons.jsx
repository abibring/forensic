import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';
import { judithContent, judithEvals, judithListItems, judithParagraphItems, judithLawList, contactSteph } from '../data.js';

class JudithGibbons extends React.Component {
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
          src="http://forensicpsychologyexperts.com/images/dr_judith_gibbons.jpg"
          className="portrait"
          alt="Dr. Judith Gibbons, Forensic Psychology Expert"
        />
        <h2>Meet Dr. Judith Gibbons</h2><br />
        {judithContent.map(content => (
          <div key={content.header}>
            <h3>{content.header}</h3>
            <p>{content.paragraph}</p>
          </div>
        ))}
        <ul className="specials">
          {judithListItems.map(item => (
            <li><span>{item}</span></li>
          ))}
         </ul>
        {judithParagraphItems.map(item => <p key={item}>{item}</p>)}
        <ul className="specials">
        {judithLawList.map(item => (
          <li key={item}><span>{item}</span></li>
        ))}
        </ul>
        {judithEvals.map(e => (
          <div key={e.header}>
            <h3>{e.header}</h3>
            <p>{e.paragraph}</p>
          </div>
        ))}
        <br />
        <h5>{contactSteph}</h5>
        <Footer />
      </div>
    );
  }
}

export default JudithGibbons;
