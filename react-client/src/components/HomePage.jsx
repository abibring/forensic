import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { homePageContent } from './data.js';

class HomePage extends React.Component {
  render() {
    const style = {fontStyle: 'italic', paddingLeft: 10, paddingRight: 10, display: 'table', borderCollapse: 'separate', borderSpacing: 2, verticalAlign: 'text-top'};
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/home_main1.jpg" />
        </div>
        <div className="landing-page-text">
        {homePageContent.map(content => (
          <ul>
            <h3>{content.header}</h3>
            <p>{content.paragraph}</p>
          </ul>
        ))}
        </div>
        <br/>
        <div className="landing-page-text"><Footer /></div>
      </div>
    )
  }
}

export default HomePage;