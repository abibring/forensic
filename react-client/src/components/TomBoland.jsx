import React from 'react';

class TomBoland extends React.Component {
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
            src="http://forensicpsychologyexperts.com/images/dr_thomas_boland.jpg"
            className="portrait"
            alt="Dr. Thomas Boland, Forensic Psychology Expert in Injury and Malpractice Law"
          />
          Meet Dr. Thomas Boland
          <br />
          Forensic Psychology Expert,
          <br />
          Injury and Malpractice Law
        </h3>
        <p>
          Dr. Thomas B. Boland is a forensic psychologist with extensive
          experience in assessing causation and damages in personal injury
          cases, particularly cases involving head injuries. He conducts expert
          evaluations on people who have head injuries resulting from a wide
          range of accidents, including motor vehicle accidents and construction
          accidents. He also conducts expert evaluations in cases of trauma
          resulting from sexual assaults, Post Traumatic Stress Disorder,
          medical malpractice, employment discrimination, lead poisoning, carbon
          monoxide poisoning, toxic mold, and false arrest.
        </p>
        <h3>Expert Witness for Plaintiffs and Defense</h3>
        <p>
          As a forensic expert, Dr. Boland has been retained by both plaintiffs'
          attorneys and defense firms. Currently Clinical Assistant Professor of
          Psychiatry and Behavioral Sciences at New York Medical College/St.
          Vincent's, Dr. Boland has maintained a private practice since 1981.
          Prior to his current teaching appointment, Dr. Boland was for more
          than 20 years a faculty member at the Weill Cornell University Medical
          College in the area of Psychology in Psychiatry.
        </p>
        <h3>Memberships and Awards</h3>
        <p>
          Licensed by the State of New York, Dr. Boland is a member of the
          American Psychological Association (Divisions of Clinical Psychology
          and Clinical Neuropsychology), the New York State Psychological
          Association, the Society of Pediatric Psychology, the National
          Register of Health Providers in Psychology, and the American Board of
          Forensic Examiners. Dr. Boland's awards include his appointment as a
          U.S. Public Health Service Fellow and a National Institute of Mental
          Health Research Fellow.
        </p>
        <h3>Background and Education</h3>
        <p>
          Dr. Boland holds a Ph.D. and an M.A. in Clinical Psychology from the
          University of Wisconsin. He has conducted research and published
          articles on a range of topics in clinical psychology. An associate of
          the Forensic Psychology Group, Dr. Boland provides expert services to
          law firms in the following areas of law:
        </p>
        <ul className="specials">
          <li>
            <span>
              Criminal law, including criminal mitigation reports and competency
              to testify
            </span>
          </li>
          <li>
            <span>
              Personal injury law, including head trauma and brain injury cases
            </span>
          </li>
          <li>
            <span>
              Civil suits, including medical, dental, and psychological
              malpractice
            </span>
          </li>
          <li>
            <span>
              Employment discrimination, including age, gender, and sexual
              discrimination
            </span>
          </li>
        </ul>
        <p>
          Contact Dr. Stephen Reich, director of the Forensic Psychology Group,
          at 1-800-852-2160 to discuss your expert needs.
        </p>
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

export default TomBoland;
