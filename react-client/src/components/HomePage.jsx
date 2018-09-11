import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const style = {fontStyle: 'italic', paddingLeft: 10, paddingRight: 10, display: 'table', borderCollapse: 'separate', borderSpacing: 2, verticalAlign: 'text-top'};
    return (
      <div>
        <div className="header-pic">
          <Logo />
          <img src="http://forensicpsychologyexperts.com/images/home_main1.jpg" />
        </div>
        <div className="landing-page-text">
          <h3>
            Experienced Forensic Psychologists Providing Expert Services
          </h3>
          <p>
            The Forensic Psychology Group is a team of leading forensic psychologists who provide psychological consultation, psychodiagnostic testing and evaluation, 
            neuropsychological evaluation, expert reports, and expert witness testimony. The seasoned experts of the Group offer professional services in the areas of 
            criminal law, including juvenile crime, white collar crime, military courts martial, and insanity; immigration law, including extreme hardship, political asylum, 
            VAWA (Violence Against Women Act), U Visas, and spousal abuse; employment law, including sexual harassment, race discrimination, religious discrimination, 
            age discrimination, and GLBT discrimination; and injury cases, including brain injury, PTSD, psychological malpractice, and disability. In all of these areas of law, 
            the forensic assessment and expert testimony of a forensic psychological expert can have a profound impact on the outcome of a case.
          </p>
          <h3>Grounded in the Law</h3>
          <p>
            The Forensic Psychology Group is led by Dr. Stephen Reich, an experienced forensic psychologist who is also an attorney. 
            Dr. Reich's dual backgrounds in psychology and the law (both a Ph.D. and a J.D.) are valuable assets to the courts in both civil and criminal cases. 
            Before becoming a licensed clinical psychologist, Dr. Reich earned his law degree from Columbia University and was a prosecutor, 
            an Assistant Attorney General of the State of New York. During this period, he was also serving as a Lieutenant in the United States Naval Reserve, 
            Judge Advocate General Corps. During periods of active duty, he acted as defense counsel to enlisted personnel during their courts martial. 
            Thus he gained experience as both a prosecutor and a defense attorney. Over the years, Dr. Reich has built a dynamic team of experienced forensic 
            professionals with extensive knowledge in a wide range of legal issues.
          </p>
          <h3>Working Collaboratively with Attorneys</h3>
          <p>
            All of the psychologists associated with the Forensic Psychology Group are licensed psychologists, experts in their respective fields 
            and members of leading professional organizations. In addition to their impressive credentials, the experts of the Forensic Psychology Group 
            have extensive experience in working collaboratively with attorneys on a wide range of forensic psychological issues. 
            They are skilled in communicating their findings in jargon-free language that judges and juries can understand and appreciate. 
            In written reports and evaluations as well as courtroom testimony, the clarity of their expert insights helps immensely in the presentation 
            of the legal issues. To discuss any forensic psychological needs that you may have, call Dr. Stephen Reich at 212-935-6133.
          </p>
          <h3>Evaluations at ICE Detention Centers and Correctional Facilities</h3>
          <p>
            The doctors of the Forensic Psychology Group are available to perform psychological evaluations and criminal psychological assessments 
            at U.S. Immigration and Customs Enforcement (ICE) detention centers and correctional facilities.
          </p>
        </div>
        <div className="landing-page-text"><Footer /></div>
        
      </div>
      
    )
  }
}

export default HomePage;