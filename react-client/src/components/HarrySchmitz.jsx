import React from 'react';
import Footer from './Footer.jsx';

class HarrySchmitz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="http://forensicpsychologyexperts.com/images/header_topimage.jpg" />
        <br />
        <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        <br />
        <h3>
          <img
            src="http://forensicpsychologyexperts.com/images/dr_harry_schmitz.jpg"
            className="portrait"
            alt="Dr. Harry Schmitz, Forensic Psychology Expert"
          />
          Meet Dr. Harry Schmitz
        </h3>
        <p>Professional profile coming soon.</p>
        <h3>
          Evaluations at ICE Detention Centers and Correctional Facilities
        </h3>
        <p>
          The doctors of the Forensic Psychology Group are available to perform
          psychological evaluations and criminal psychological assessments at
          U.S. Immigration and Customs Enforcement (ICE) detention centers and
          correctional facilities.
        </p>
        <Footer />
      </div>
    );
  }
}

export default HarrySchmitz;
