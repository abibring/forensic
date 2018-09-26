import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import ExpertServices from './components/ExpertServices.jsx';
import CriminalLaw from './components/CriminalLaw.jsx';
import ImmigrationLaw from './components/ImmigrationLaw.jsx';
import EmploymentLaw from './components/EmploymentLaw.jsx';
import SSDisability from './components/SSDisability.jsx';
import Negligence from './components/NegligenceLaw.jsx';
import StephenReich from './components/experts/StephenReich.jsx';
import IsabelRodriguez from './components/experts/IsabelRodriguez.jsx';
import GeraldBryant from './components/experts/GeraldBryant.jsx';
import JudithGibbons from './components/experts/JudithGibbons.jsx';
import TomBoland from './components/experts/TomBoland.jsx';
import AndreaHamilton from './components/experts/AndreaHamilton.jsx';
import HarrySchmitz from './components/experts/HarrySchmitz.jsx'
import OnTheAir from './components/OnTheAir.jsx';
import InTheNews from './components/InTheNews.jsx';
import ContactUs from './components/ContactUs.jsx';
// import Parallax from './components/Parallax/Parallax.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" render={() => <HomePage />}/>
          <Route path="/expertservices" render={() => <ExpertServices/>} />
          <Route path="/criminallaw" render={() => <CriminalLaw />}/>
          <Route path="/employmentlaw" render={() => <EmploymentLaw />}/>
          <Route path="/disability" render={() => <SSDisability />}/>
          <Route path="/negligence" render={() => <Negligence />}/>
          <Route path="/immigration" render={() => <ImmigrationLaw />} />
          <Route path="/stephenreich" render={() => <StephenReich />}/>
          <Route path="/isabelrodriguez" render={() => <IsabelRodriguez />}/>
          <Route path="/geraldbryant" render={() => <GeraldBryant />}/>
          <Route path="/judithgibbons" render={() => <JudithGibbons />}/>
          <Route path="/tomboland" render={() => <TomBoland />}/>
          <Route path="/andreahamilton" render={() => <AndreaHamilton />}/>
          <Route path="/harryschmitz" render={() => <HarrySchmitz />}/>
          <Route path="/ontheair" render={() => <OnTheAir />}/>
          <Route path="/inthenews" render={() => <InTheNews />}/>
          <Route path="/contactus" render={() => <ContactUs />}/>
        </div>
      </Router>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));