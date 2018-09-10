import React from 'react';

class ContactUs extends React.Component {
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
        <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" alt="" />
        <h3>Contact Us</h3>
        <p>
          The main offices of the Forensic Psychology Group are located in New
          York City.
        </p>
        <p>
          <strong>NEW YORK</strong> <br />
          Stephen Reich, Ph.D., J.D., Director <br />
          141 East 55th St., Suite 2A <br />
          New York, NY 10022 <br />
          212-935-6133 <br />
          800-852-2160 <br />
          212-750-6350 fax
        </p>
        <h3>
          NOTE: Evaluations at ICE Detention Centers and Correctional Facilities
        </h3>
        <p>
          The doctors of the Forensic Psychology Group are available to perform
          psychological evaluations and criminal psychological assessments at
          U.S. Immigration and Customs Enforcement (ICE) detention centers and
          correctional facilities.
        </p>
      </div>
    );
  }
}

export default ContactUs;
