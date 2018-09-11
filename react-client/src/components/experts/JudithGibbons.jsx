import React from 'react';
import Footer from '../Footer.jsx';
import Logo from '../Logo.jsx';

class JudithGibbons extends React.Component {
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
        <br />
        <h3>
          <img
            src="http://forensicpsychologyexperts.com/images/dr_judith_gibbons.jpg"
            className="portrait"
            alt="Dr. Judith Gibbons, Forensic Psychology Expert"
          />
          Meet Dr. Judith Gibbons
          <br />
          Forensic Psychology Expert
        </h3>
        <p>
          An experienced forensic psychologist, Dr. Judith Gibbons delivers
          expert services for the Forensic Psychology Group in several key
          areas. She specializes in forensic, psychological, and
          neuropsychological evaluations, and is valued for delivering
          comprehensive reports that are clear, concise, and written in
          jargon-free language that is easily understood by judges and juries.
          Dr. Gibbons is available for expert testimony in the areas of
          immigration, employment discrimination law, and criminal law. She is
          responsive to the needs and timelines of attorneys and their clients,
          and is expert in the presentation of psychological evidence.
        </p>
        <h3>An Experienced Forensic Evaluator in Immigration Law</h3>
        <p>
          Dr. Gibbons is an experienced forensic evaluator in the area of
          immigration law. She is adept at identifying key issues in all areas
          of immigration law, including extreme and exceptional hardship. Her
          reports have helped to show the devastating psychological consequences
          of family separation in hardship cases, the betrayal of trust in
          spousal abuse cases, and the debilitating fear of persecution in
          political asylum cases. Two recent immigration law cases in which Dr.
          Gibbons provided expert services to the Bar include:
        </p>
        <ul class="specials">
          <li>
            <span>
              The case of a young American woman engaged to marry a man from
              another country. When her fianc&eacute; over-stayed his visa by
              several months, he was deported and banished from the U.S. for ten
              years. The wedding plans had to be put on hold. The United States
              authorities suggested that the young woman, who comes from a very
              close-knit family, move to her fianc&eacute;'s country. Separated
              from her fianc&eacute; just weeks before she was to be married and
              the real prospect of separation from her loving family represented
              an extreme and exceptional hardship for her. She began to suffer
              from both depression and anxiety. Dr. Gibbons provided diagnostic
              assessments of the young woman's condition, and testified on her
              behalf.
            </span>
          </li>
          <li>
            <span>
              The case of a successful businessman who is a United States
              citizen. He has grown children from a previous marriage who live
              in the U.S. and with whom he is very close. His second wife was
              born in another country. They have a baby girl. His wife was
              deported to her country of origin. The businessman takes their
              daughter to visit her mother. However, the child only gets to see
              her mother four or five times a year, for limited periods. The
              girl developed separation anxiety problems and the father became
              depressed as a result of being separated from his wife and
              observing how upset their daughter has become. Dr. Gibbons
              diagnosed the child with separation anxiety disorder and testified
              about the impact of this separation on the child as she gets
              older, as well as the impact on the father. The legal objective
              was to obtain a waiver for the father and daughter so that the
              mother can re-enter the U.S. and be with her family.
            </span>
          </li>
        </ul>
        <p>
          This is just a sampling of the many immigration cases in which Dr.
          Gibbons has been called as an expert. In addition to these cases of
          extreme hardship, she has also conducted psychological evaluations and
          given her expert testimony in cases of spousal abuse, political
          asylum, and criminal mitigation. Dr. Gibbons is a member of the
          American College of Forensic Psychology and the American Psychological
          Association.
        </p>
        <p>
          In her New York City-based private practice, Dr. Gibbons provides
          psychological consultation, individual therapy, couples therapy, and
          family therapy. She holds a Ph.D. in Clinical Psychology from Fordham
          University, where she was a National Institute of Mental Health
          Fellow. At the Weill Medical College of Cornell University, Dr.
          Gibbons was a Fellow in the Division of Psychology and a Research
          Fellow in Clinical Psychology. Dr. Gibbons is an experienced educator
          and a sought-after speaker. She conducts workshops and seminars in a
          wide range of clinical areas, including mediation, conflict
          negotiation, sensitivity training, stress management, and
          interpersonal conflict.
        </p>
        <p>
          Dr. Gibbons provides expert services to law firms, institutions,
          corporations, and human rights organizations in the following areas of
          law:
        </p>
        <ul class="specials">
          <li>
            <span>
              Immigration law, including asylum, political asylum, extreme and
              exceptional hardship, spousal abuse, and U Visas
            </span>
          </li>
          <li>
            <span>
              Criminal law, including psychological consultation, and mitigation
              reports
            </span>
          </li>
          <li>
            <span>
              Employment discrimination, age discrimination, gender
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
        <Footer />
      </div>
    );
  }
}

export default JudithGibbons;
