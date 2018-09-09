import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navigation from './components/Navigation.jsx';
import MainPage from './components/MainPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainPage />
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));