import React from 'react';
import Footer from './Footer.jsx';

class InTheNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="http://forensicpsychologyexperts.com/images/header_topimage.jpg" />
        <br />
        <img src="http://forensicpsychologyexperts.com/images/header_slogan.gif" />
        <br />
        <p>
          Forensic psychologist Dr. Stephen Reich comments on the dismissed
          Virginia TV reporter who shot and killed two former colleagues as they
          were broadcasting live on a morning news show. "Documents: Va.
          shooting suspect had a history of racial complaints," by Stephen
          Loiaconi, WJLA, Washington, D.C.
          <br />
          <a
            href="http://wjla.com/news/nation-world/documents-va-shooting-suspect-had-a-history-of-racial-complaints"
            className="inline"
          >
            Read article
          </a>
          on the WJLA website.)
        </p>
        <p>
          Forensic psychologist Dr. Stephen Reich is interviewed about the
          high-profile case of a 19-year-old man charged with the murder of a
          mother who had been giving her daughter a driving lesson. "Head Injury
          to Suspect as Child Could Be Used by Defense," by the Associated Press
          <br />
          <a
            href="http://abcnews.go.com/US/wireStory/records-suspect-vegas-killing-abused-baby-29274076?singlePage=true"
            className="inline"
          >
            Read article
          </a>
          on the ABCnews.com website.)
        </p>
        <p>
          "Community still shaken after P.J.'s murder" from
          <i>Amsterdam News</i>
          <br />
          <a
            href="http://amsterdamnews.com/news/2014/jul/17/community-still-shaken-after-pjs-murder/"
            className="inline"
          >
            Read article
          </a>
          on the AmsterdamNews.com website.)
        </p>
        <p>
          CBS News
          <br />
          <a href="itn_jodiarias.shtml" className="inline">
            Read CBS News Update
          </a>
          on the Jodi Arias Case.)
          <br />
        </p>
        <p>
          Dr. Stephen Reich: Hazing Still a Problem Among College Students - CBS
          News
          <br />
          <a href="itn_chenhsiendeng.shtml" className="inline">
            Read Article on College Hazing
          </a>
          .)
          <br />
        </p>
        <p>
          "LES SECRETS DE L'AVENUE SEYMOUR" (on the Cleveland kidnappings) from
          La Presse Canada)
          <br />
          <a
            href="http://plus.lapresse.ca/screens/40d1-7ec8-51891ec1-94a2-493bac1c6068%7C5NmgXuk_H_pl.html"
            className="inline"
          >
            Read French language article
          </a>
          on LaPresse.ca website.
          <a
            href="http://translate.google.com/translate?sl=fr&tl=en&js=n&prev=_t&hl=en&ie=UTF-8&eotf=1&u=http%3A%2F%2Fplus.lapresse.ca%2Fscreens%2F40d1-7ec8-51891ec1-94a2-493bac1c6068%257C5NmgXuk_H_pl.html"
            className="inline"
          >
            Read article via Google Translate
          </a>
          )
        </p>
        <p>
          "'The Angel of Death' and the Hospitals That Put a Serial Killer to
          Work" from The Daily Beast Newsweek)
          <br />
          <a
            href="http://www.thedailybeast.com/articles/2013/04/14/the-angel-of-death-and-the-hospitals-that-put-a-serial-killer-to-work.html"
            className="inline"
          >
            Read article
          </a>
          on TheDailyBeast.com website.)
        </p>
        <p>
          "Details of Newtown gunman's life emerge" from 7Online.com (WABC-TV
          Eyewitness News, New York, N.Y.)
          <br />
          <a
            href="http://abclocal.go.com/wabc/story?section=news/local/northern_suburbs&id=8920448"
            className="inline"
          >
            Read article
          </a>
          on the Eyewitness News website.)
        </p>
        <p>
          "Convicted Baby-Snatcher Ann Pettway Was Blinded by Selfishness,
          Doctors Say" from The Daily Beast Newsweek)
          <br />
          <a
            href="http://www.thedailybeast.com/articles/2012/08/01/convicted-baby-snatcher-ann-pettway-was-blinded-by-selfishness-doctors-say.html"
            className="inline"
          >
            Read article
          </a>
          on TheDailyBeast.com website.)
        </p>
        <p>
          "A Forensic Psychologist's Report In A Sexual Harassment, Hostile Work
          Environment And Retaliation Case," Stephen Reich, Ph.D. from
          <i>The Employee Advocate</i>, Summer 2008.
          <br />
          <a href="mootcourt.shtml" className="inline">
            Read Article
          </a>
          |
          <a href="pdf/employeeadvocate.pdf" className="inline">
            Download PDF
          </a>
          )
        </p>
        <p>
          "Due Process: Lawyer-Turned-Forensic Psychologist Evaluates Victims of
          Human Rights Abuse." From
          <i>
            Communitas: The Newsletter of Fordham University's Graduate School
            of Arts and Sciences
          </i>
          , Vol. III Issue 1.
          <br />
          <a
            href="http://legacy.fordham.edu/academics/colleges__graduate_s/graduate__profession/arts__sciences/news__events/communitas_alumni_ne/communitas_alumni_ne2/due_process_76941.asp"
            className="inline"
          >
            Read article
          </a>
          on the Fordham website)
        </p>
        <Footer />
      </div>
    );
  }
}

export default InTheNews;
