import React from 'react';
import ReactDOM from 'react-dom';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: true, showExpert: false, showEmployment: false  };
    this.onClickNav = this.onClickNav.bind(this);
  }
  onClickNav(navCat) {
    if (navCat === 'Expert Services') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: true, showEmployment: false });
    } else if (navCat === 'Criminal Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: true, showHome: false, showExpert: false, showEmployment: false });
    } else  if (navCat === 'Immigration Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: true, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Employment Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: true });
    } else if (navCat === 'SS Disability') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: true, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Negligence Law') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: true, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Stephen Reich') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: true, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Isabel A. Rodriguez') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: true, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Gerald Bryant') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: true, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Judith Gibbons') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: true, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Tom Boland') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: true, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Andrea Hamilton') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: true, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Dr. Harry Schmitz') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: true, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'On The Air') {
      this.setState({ showContact: false, showInNews: false, showOnAir: true, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'In The News') {
      this.setState({ showContact: false, showInNews: true, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Contact Us') {
      this.setState({ showContact: true, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: false, showExpert: false, showEmployment: false });
    } else if (navCat === 'Home') {
      this.setState({ showContact: false, showInNews: false, showOnAir: false, showHarry: false, showAndrea: false, showTom: false, showJudith: false, showGerald: false, showIsabel: false, showStephen: false, showNegligence: false, showDisability: false, showImmigration: false, showCriminal: false, showHome: true, showExpert: false, showEmployment: false });
    }
  }
  render() {
    return (
      <div className="app">
        <NavBar onClick={this.onClickNav} />
        {this.state.showHome ? <HomePage /> : ''}
        {this.state.showExpert ? <ExpertServices onClick={this.onClickNav}/> : ''}
        {this.state.showCriminal ? <CriminalLaw /> : ''}
        {this.state.showImmigration ? <ImmigrationLaw  /> : ''}
        {this.state.showEmployment ? <EmploymentLaw  /> : ''}
        {this.state.showDisability ? <SSDisability /> : ''}
        {this.state.showNegligence ? <Negligence /> : ''}
        {this.state.showStephen ? <StephenReich /> : ''}
        {this.state.showIsabel ? <IsabelRodriguez /> : ''}
        {this.state.showGerald ? <GeraldBryant  /> : ''}
        {this.state.showJudith ? <JudithGibbons  /> : ''}
        {this.state.showTom ? <TomBoland /> : ''}
        {this.state.showAndrea ? <AndreaHamilton /> : ''}
        {this.state.showHarry ? <HarrySchmitz /> : ''}
        {this.state.showOnAir ? <OnTheAir /> : ''}
        {this.state.showInNews ? <InTheNews /> : ''}
        {this.state.showContact ? <ContactUs /> : ''}
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));