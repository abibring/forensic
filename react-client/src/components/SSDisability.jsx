import React from 'react';
import Footer from './Footer.jsx';

class SSDisability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="http://forensicpsychologyexperts.com/images/header_topimage.jpg" />
        <br />
        <img
          src="http://forensicpsychologyexperts.com/images/header_slogan.gif"
          alt=""
        />
        <p />
        <img
          src="http://forensicpsychologyexperts.com/images/disability_psychologists.jpg"
          className="Drs. Hamilton, Bryant, and Schmitz evaluate individuals and write social security disability reports."
          alt=""
          border="0"
        />
        <h3>Social Security Disability Experts</h3>
        <p>
          The psychologists of the Forensic Psychology Group are frequently
          asked to perform psychological evaluations of individuals who are
          applying for Social Security Disability (SSD) or Supplemental Security
          Income (SSI). For both of these benefits programs, the application
          process is lengthy and complex. Claimants are required to prove that
          their developmental disabilities or mental conditions prevent them
          from working or holding a job and taking care of themselves.
        </p>
        <h3>Social Security Disability Reports</h3>
        <p>
          The experts of the Forensic Psychology Group are experienced in
          writing clear and compelling reports for review by the Social Security
          Administration judge on the applicant's disabilities, symptoms, and
          behaviors as well as their impact on his or her ability to live
          independently or hold a job. Sometimes the disability is both mental
          and physical. The doctors evaluate for a variety of mental conditions,
          including:
        </p>
        <table width="80%">
          <tr>
            <td>
              <img src="images/spacer.gif" alt="" />
            </td>
            <td width="60%" valign="top">
              <p>Agoraphobia</p>
              <p>Anxiety</p>
              <p>Severe Autism </p>
              <p>Bi-polar disorders</p>
              <p>Borderline Personality</p>
              <p>Brain Injury</p>
              <p>Major Depression</p>
              <p>Developmental Disability</p>
              <p>Downs Syndrome</p>
              <p>Drug and Alcohol Addiction </p>
              <p>Hypochondria</p>
            </td>
            <td>
              <img src="images/spacer.gif" alt="" />
            </td>
            <td width="40%" valign="top">
              <p>Manic Episodes </p>
              <p>Mental Retardation</p>
              <p>Nervous Breakdown</p>
              <p>Obsessive Compulsive</p>
              <p>Panic Attacks</p>
              <p>Paranoia</p>
              <p>Phobias</p>
              <p>Post Traumatic Stress</p>
              <p>Psychotic Episodes</p>
              <p>Schizophrenia</p>
              <p>Tourettes Syndrome</p>
            </td>
            <td>
              <img src="images/spacer.gif" width="20" height="1" alt="" />
            </td>
          </tr>
        </table>

        <h3>Mental Disorders, SSI and SSD</h3>
        <p>
          Before determining whether the illness is severe enough to prevent a
          person from working, the Social Security judge is required look at
          various areas of functioning. Extensive documentation and
          psychological evidence can substantially strengthen a claimant's
          presentation and are often critical to his or her success. The
          psychologists of the Forensic Psychology Group have vast experience in
          evaluating and working with people who have psychological issues
          related to medical trauma.
        </p>
        <h3>Experienced SSI and SSD Experts</h3>
        <p>
          Dr. Hamilton, Dr. Gibbons, and Dr. Schmitz provide evaluations in the
          areas of SSI and SSD. Dr. Schmitz evaluates cases in the Albany and
          upstate New York area. Dr. Gibbons and Dr. Hamilton are based in New
          York City. Dr. Stephen Reich, director of the Forensic Psychology
          Group, says, "We are able to help deserving applicants validate their
          Social Security Disability claims." Contact the Forensic Psychology
          Group at 212-935-6133 to discuss your needs.
        </p>
        <Footer />
      </div>
    );
  }
}

export default SSDisability;
