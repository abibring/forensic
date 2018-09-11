import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';

class Negligence extends React.Component {
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
        <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        <h3>Expert Services in Injury and Negligence Cases</h3>
        <p>
          The experts of the Forensic Psychology Group assist both plaintiffs
          and defense attorneys in a wide range of issues involved in personal
          injury cases, intentional harm, or negligent acts, including:
        </p>
        <table width="100%">
          <tr>
            <td width="50%" valign="top">
              <p>
                Car, Bus, Truck Accidents
                <br />
                Traumatic Brain Injuries
                <br />
                Chemical Burn Injuries
                <br />
                Wrongful Death Cases
                <br />
                Fire-Related Burn Injuries
                <br />
                Catastrophic Injuries
                <br />
                Construction Accidents
                <br />
                Defective Products
                <br />
                Medical Malpractice
                <br />
                Adverse Reactions to Medications
                <br />
                Animal Attacks
              </p>
            </td>
            <td width="50%" valign="top">
              <p>
                Rollover Accidents
                <br />
                Medical Negligence
                <br />
                Premises Liability
                <br />
                Emergency Room Injuries
                <br />
                Surgical Mistakes
                <br />
                Electrical Burns and Injuries
                <br />
                Non-Traumatic Brain Injuries
                <br />
                Mental Disability
                <br />
                Personal Injury Evaluation
                <br />
                Standard of Care Evaluations
                <br />
                Negligence
              </p>
            </td>
          </tr>
        </table>
        <h3>IME's, Psychological, and Psychiatric Evaluations</h3>
        <p>
          Where traumatic brain injury or other physical trauma may be involved,
          our clinical psychologists evaluate claims of mental, emotional, and
          behavioral injuries. Through psychodiagnostic and neuropsychological
          testing, the experts of the Forensic Psychology Group assess the
          plaintiff's claimed injuries to his or her intellectual ability,
          emotional reactivity, and behavioral regulation and control. Our
          expert evaluations and reports aid in determining whether or not
          damages exist. If it is determined that an injurious event did exist,
          the forensic expert will be able to assess the level and severity of
          distress or disability as a result of an injury.
        </p>
        <h3>Forensic Specialties and Expertise</h3>
        <p>
          Commonly reported psychiatric reactions to injuries may include post
          traumatic stress disorder (PTSD), depression, anxiety disorders, as
          well as somatic complaints (such as migraines, gastrointestinal
          problems, nausea, vomiting, colitis, and skin disorders) and cognitive
          impairments. In survivors of electrical and high voltage injuries,
          immediate manifestations may include altered consciousness, confusion,
          disorientation, and amnesia. Our experts have extensive experience in
          assessing and evaluating the full range of symptoms resulting from
          personal injuries, including claims of chronic pain, personality
          changes, flashbacks, and memory deficits as well as malingering and
          deception.
        </p>
        <h3>Well-Researched and Documented Reports</h3>
        <p>
          The reports produced by members of the Forensic Psychology Group are
          written clearly, simply, in down-to-earth, jargon-free language,
          language the courts understand. Our capable experts, led by Dr. Reich,
          who is also an attorney, translate complex psychological information
          so that lawyers can easily use it to strengthen their cases.
        </p>
        <h3>Expert Witness Testimony in Injury Cases</h3>
        <p>
          In addition to performing expert psychological diagnostic examinations
          and evaluations, Dr. Reich and his associates serve as expert
          witnesses in personal injury, medical malpractice, defective products,
          and negligence cases. Professional, confident, and always prepared,
          they are able to make complex diagnoses understandable. They give
          expert witness evidence in terms that the jury can understand, and can
          easily relate to. They are experienced in answering difficult
          questions truthfully and carefully in both deposition and
          cross-examination testimony.
        </p>
        <h3>Contact the Forensic Psychology Negligence Experts</h3>
        <p>
          Psychologist and attorney Stephen Reich and his team of expert
          forensic psychologists at the Forensic Psychology Group have extensive
          experience in working collaboratively with attorneys on a wide range
          of issues in personal injury law and negligence law. If you would like
          to discuss your expert needs in an injury or negligence case, contact
          Dr. Stephen Reich at <strong>800-852-2160</strong>.
        </p>
        <Footer />
      </div>
    );
  }
}

export default Negligence;
