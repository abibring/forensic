import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div align="bottom" style={{ color: 'red' }}>
            <strong align="center">
                <span>
                  <ul>FORENSIC PSYCHOLOGY GROUP</ul>
                  <ul>141 EAST 55TH STREET, SUITE 2A</ul>
                </span>
                <span>
                  <ul>NEW YORK, NY 10022</ul>
                  <ul>212-935-6133</ul>
                </span>
              </strong>
              
        </div>
        <div align="center">
          <i>Evening and Weekend Appointments Available</i>
        </div>
        <br />
          <div align="center">
              <i>
                To protect the privacy of our clients and their families, the
                names, ages, and locations
                <br />
                of the cases mentioned on this website have been changed.
              </i>
          </div>
        <br />
          <div align="center">
            &copy; 2009-2017 Watson Communications
          </div>
        </div>
        
    )
  }
}

export default Footer;