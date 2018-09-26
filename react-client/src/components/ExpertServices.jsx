import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { expertCriminalList, expertEmploymentList, expertImmigrationList, expertCivilList } from './data.js';

class ExpertServices extends React.Component {
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
        <h3>Expert Witness Testimony and Evaluations</h3>
        <p>
          When your legal issue has a psychological component, a comprehensive
          psychological report, together with expert witness testimony, can make
          all the difference. The clinical and forensic psychologists of the
          Forensic Psychology Group have extensive experience in working
          collaboratively with attorneys in a wide range of forensic
          psychological issues. Led by Dr. Stephen Reich, a dynamic clinical
          psychologist who is also an attorney, our doctors work closely with
          you from the inception of your case through its conclusion.
        </p>
        <h3>Criminal Law</h3>
        <p>
          Our experts offer services to both criminal defense attorneys and
          prosecutors in many areas of
          <a href="#" className="inline" onClick={() => this.props.onClick('Criminal Law')}>
          &nbsp;Criminal Law
          </a>
          , including:
        </p>
        <ul>
        {expertCriminalList.map(list => <li key={list}>{list}</li>)}
        </ul>
        <h3>Employment Law</h3>
        <p>
          The Forensic Psychology experts are retained by both plaintiffs and
          defense attorneys in all areas of
          <a href="#" className="inline" onClick={() => this.props.onClick('Employment Law')}>
          &nbsp;Employment Law
          </a>
          , including:
        </p>
        <ul>
        {expertEmploymentList.map(list => <li key={list}>{list}</li>)}
        </ul>
        <h3>Immigration Law</h3>
        <p>
          The Forensic Psychology Group experts have extensive experience in the
          area of
          <a href="#" className="inline" onClick={() => this.props.onClick('Immigration Law')}>
          &nbsp;Immigration Law
          </a>
          , including:
        </p>
        <ul>
          {expertImmigrationList.map(list => <li key={list}>{list}</li>)}
        </ul><br/>
        <h3>Civil Law and Negligence Law</h3>
        <p>
          The Group's forensic psychological experts have extensive experience
          in civil matters and 
          <a href="#" className="inline" onClick={() => this.props.onClick('Negligence Law')}>
             &nbsp;Negligence cases
          </a>
          , including:
        </p>
        <ul>
          {expertCivilList.map(list => <li key={list}>{list}</li>)}
        </ul>
        <h3>
          Evaluations at ICE Detention Centers and Correctional Facilities
        </h3>
        <p>
          The doctors of the Forensic Psychology Group are available to perform
          psychological evaluations and criminal psychological assessments at
          U.S. Immigration and Customs Enforcement (ICE) detention centers and
          correctional facilities.
        </p>
        <br />
        <Footer />
      </div>
    );
  }
}

export default ExpertServices;
