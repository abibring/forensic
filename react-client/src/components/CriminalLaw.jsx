import React from 'react';
import Footer from './Footer.jsx';

class CriminalLaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="http://forensicpsychologyexperts.com/images/header_topimage.jpg" />
        <br />
        <div>
          <img src="http://forensicpsychologyexperts.com/images/settlements_520.jpg" />
          <br />
          <h6>Forensic Psychology Group experts testify in courtrooms around the nation.</h6>
          <h3>Expert Services in Criminal Law Cases</h3>
          <p>The experts of the Forensic Psychology Group assist criminal lawyers in a wide range of issues that may be involved in a criminal case, 
            including criminal competency, juvenile criminal competency, criminal responsibility, insanity defenses, diminished capacity, malingering, 
            criminal mitigation, ability to form specific intent, therapeutic and rehabilitative programs, evaluations for parole hearings, and mitigation reports. 
            Of central importance in virtually every criminal case is the element of presenting to the judge and jury a clear statement of who this defendant is 
            and why his or her background should be taken into consideration.</p>
          <h3>Criminal Mitigation Evaluations</h3>
          <p>The major element in the mitigation phase of a criminal case is the presentation of a human life in all of its complexity. Some criminal cases are 
            so extreme and the issue of guilt so clear that the only thing left for the criminal lawyer is to present mitigating circumstances to the best of his or her ability.</p>
          <h3>Diagnostic Psychological Evaluation and Assessment</h3>
          <p>All mitigation profiles that are presented by the Forensic Psychology Group begin with a full biographical profile of the individual. In cases of criminal responsibility, 
            diminished capacity, competency to stand trial, and mental state at the time of the offense, the full biographical history is enhanced by a complete battery of psychological 
            and neuropsychological tests to attempt to demonstrate who the defendant is as a person and the forces that have shaped his or her life.</p>
          <h3>Well-Researched and Documented Reports</h3>
          <p>The reports produced by members of the Forensic Psychology Group are written clearly, simply, in down to earth, jargon-free language so that the judge will have a better 
            knowledge of the defendant as an individual. The Group's well- researched and documented mitigation reports may help to reduce prison sentencing time. In some cases, they 
            help the judge to choose a therapeutic and rehabilitative program for the defendant instead of prison.</p>
          <h3>Expert Witness Testimony in Criminal Cases</h3>
          <p>In addition to expert psychological diagnostic evaluations, Dr. Reich and his associates serve as expert witnesses in criminal cases. Dr. Stephen Reich and the expert 
            associates of the Forensic Psychology Group have extensive experience in working collaboratively with attorneys on a wide range of issues in criminal law. Contact Dr. Stephen Reich 
            at 800-852-2160 to discuss your expert needs.</p>
          <h3>Evaluations at ICE Detention Centers and Correctional Facilities</h3>
          <p>The doctors of the Forensic Psychology Group are available to perform psychological evaluations and criminal psychological assessments at U.S. Immigration and Customs Enforcement (ICE)
            detention centers and correctional facilities.</p>
          </div>    
          <Footer />
        </div>
    );
  }
}

export default CriminalLaw;