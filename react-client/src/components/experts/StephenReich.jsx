import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';
import { stephenContent } from '../data.js'; 

class StephenReich extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" alt="Stephen Reich, J.D., Ph.D." />
        </div><br/>
        <img src="http://forensicpsychologyexperts.com/images/dr_stephen_reich.jpg" />
        {stephenContent.map(content => (
          <div key={content.header}>
            <h3>{content.header}</h3>
            <p>{content.paragraph}</p>
            {content.link ? 
            <div><a href={content.link.ref}>Click Here: </a><p>{content.link.text}</p></div>
            : 
            ''
            }
          </div>
        ))}
        <br />
        <Footer />
      </div>
    );
  }
}

export default StephenReich;
