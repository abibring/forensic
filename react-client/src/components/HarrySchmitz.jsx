import React from 'react';

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
        <button onClick={this.props.onClick}>Go Back Home</button>
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

        <td
          className="botlefnav"
          colspan="3"
          valign="bottom"
          style={{ color: 'red' }}
        >
          <div align="center">
            <p />
            <p className="botlefnav">
              <strong>
                FORENSIC PSYCHOLOGY GROUP &bull; 141 EAST 55TH STREET, SUITE 2A
                &bull; NEW YORK, NY 10022 &bull; 212-935-6133
              </strong>
            </p>
          </div>
        </td>
        <br />
        <td className="botlefnav" colspan="3" valign="bottom">
          <div align="center">
            <p />
            <p>
              <i>Evening and Weekend Appointments Available</i>
            </p>
          </div>
        </td>
        <br />
        <td className="botlefnav" colspan="3" valign="bottom">
          <div align="center">
            <p />
            <p>
              <i>
                To protect the privacy of our clients and their families, the
                names, ages, and locations
                <br />
                of the cases mentioned on this website have been changed.
              </i>
            </p>
          </div>
        </td>
        <br />
        <td className="botlefnav" colspan="3" valign="bottom">
          <div align="center">
            <p />
            <p>&copy; 2009-2017 Watson Communications</p>
          </div>
        </td>
        <br />
      </div>
    );
  }
}

export default HarrySchmitz;
