import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { newsArticles } from './data.js';


class InTheNews extends React.Component {
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
        {newsArticles.map(article => (
          <div key={article.link}>
          <p>{article.text}</p>
          <a href={article.link} className="inline">Read Article</a>
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

export default InTheNews;
