import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <td
          colspan="3"
          valign="bottom"
          style={{ color: 'red' }}
        >
          <div align="center">
            <p />
            <p>
            <strong>
                <span>
                  <li>FORENSIC PSYCHOLOGY GROUP</li>
                  <li>141 EAST 55TH STREET, SUITE 2A</li>
                </span>
                <span>
                  <li>NEW YORK, NY 10022</li>
                  <li>212-935-6133</li>
                </span>
              </strong>
            </p>
          </div>
        </td>
        <br />
        <td colspan="3" valign="bottom">
          <div align="center">
            <p />
            <p>
              <i>Evening and Weekend Appointments Available</i>
            </p>
          </div>
        </td>
        <br />
        <td colspan="3" valign="bottom">
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
        <td colspan="3" valign="bottom">
          <div align="center">
            <p />
            <p>&copy; 2009-2017 Watson Communications</p>
          </div>
        </td>
      </div>  
    )
  }
}

export default Footer;