import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navigation from './components/Navigation.jsx';
import HomePage from './components/HomePage.jsx';
import ExpertServices from './components/ExpertServices.jsx';
import CriminalLaw from './components/CriminalLaw.jsx';
import ImmigrationLaw from './components/ImmigrationLaw.jsx';
import EmploymentLaw from './components/EmploymentLaw.jsx';
import SSDisability from './components/SSDisability.jsx';
import Negligence from './components/NegligenceLaw.jsx';
import StephenReich from './components/StephenReich.jsx';
import IsabelRodriguez from './components/IsabelRodriguez.jsx';
import GeraldBryant from './components/GeraldBryant.jsx';
import JudithGibbons from './components/JudithGibbons.jsx';
import TomBoland from './components/TomBoland.jsx';
import AndreaHamilton from './components/AndreaHamilton.jsx';
import HarrySchmitz from './components/HarrySchmitz.jsx'
import OnTheAir from './components/OnTheAir.jsx';
import InTheNews from './components/InTheNews.jsx';
import ContactUs from './components/ContactUs.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: true, showCriminal: false, showHome: true, showExpert: false, showEmployment: false  };
    this.onClickNav = this.onClickNav.bind(this);
    this.onClickReturnHome = this.onClickReturnHome.bind(this);
  }
  onClickNav(navCat) {
    // console.log(navCat)
    // const { showNav, showExpert, showCriminal, showHome } = this.state;
    if (navCat === 'Expert Services') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: true, showEmployment: false });
    } else if (navCat === 'Criminal Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: true, showHome: false, showExpert: false, showEmployment: false });
    } else  if (navCat === 'Immigration Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: true, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Employment Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: true });
    } else if (navCat === 'SS Disability') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: true, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Negligence Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: true, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Stephen Reich') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: true, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Isabel A. Rodriguez') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: true, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Gerald Bryant') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: true, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Judith Gibbons') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: true, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Tom Boland') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: true, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Andrea Hamilton') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: true, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Harry Schmitz') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: true, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'On The Air') {
      this.setState({ showContact: false, showInNews: false, showOnAir: true, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'In The News') {
      this.setState({ showContact: false, showInNews: true, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Contact Us') {
      this.setState({ showContact: true, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showNav: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else {

    }
  }
  onClickReturnHome(e) {
    // const { showExpert, showNav } = this.state;
    this.setState({ showNav: true, showHome: true, showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showExpert: false, showEmployment: false});
  }

  render() {
    const { showOnAir, showInNews, showContact, showHarry, showAndrea, showTom, showJudith, showGerald, showIsabel, showStephen, showExpert, showNav, showCriminal, showHome, showImmigration, showEmployment, showDisability, showNegligence } = this.state;
    return (
      <div className="app">
        {showHome ? <HomePage /> : ''}
        {showNav ?  <Navigation onClick={this.onClickNav} onClickHome={this.props.onClickReturnHome} /> : '' }
        {showExpert ? <ExpertServices onClick={this.onClickReturnHome}/> : ''}
        {showCriminal ? <CriminalLaw onClick={this.onClickReturnHome}/> : ''}
        {showImmigration ? <ImmigrationLaw onClick={this.onClickReturnHome} /> : ''}
        {showEmployment ? <EmploymentLaw onClick={this.onClickReturnHome} /> : ''}
        {showDisability ? <SSDisability onClick={this.onClickReturnHome}/> : ''}
        {showNegligence ? <Negligence onClick={this.onClickReturnHome}/> : ''}
        {showStephen ? <StephenReich onClick={this.onClickReturnHome}/> : ''}
        {showIsabel ? <IsabelRodriguez onClick={this.onClickReturnHome}/> : ''}
        {showGerald ? <GeraldBryant onClick={this.onClickReturnHome} /> : ''}
        {showJudith ? <JudithGibbons onClick={this.onClickReturnHome} /> : ''}
        {showTom ? <TomBoland onClick={this.onClickReturnHome} /> : ''}
        {showAndrea ? <AndreaHamilton onClick={this.onClickReturnHome} /> : ''}
        {showHarry ? <HarrySchmitz onClick={this.onClickReturnHome} /> : ''}
        {showOnAir ? <OnTheAir onClick={this.onClickReturnHome} /> : ''}
        {showInNews ? <InTheNews onClick={this.onClickReturnHome} /> : ''}
        {showContact ? <ContactUs onClick={this.onClickReturnHome} /> : ''}
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));