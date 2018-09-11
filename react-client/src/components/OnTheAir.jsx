import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';

class OnTheAir extends React.Component {
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
        <td className="middletext">
          <img src="images/spacer.gif" width="500" height="10" alt="" />
          <h3>On The Air</h3>
          <p>
            Dr. Stephen Reich testifies in courtrooms around the nation about
            psychological evaluations, assessments, and expert reports. In
            addition to testimony in criminal cases, Dr. Reich answers questions
            and explains complex concepts to juries in civil cases, such as
            sexual harassment or discrimination in the work environment, complex
            immigration cases, and serious personal injury cases. News reporters
            from TV, radio, Internet, and print also call Dr. Reich with
            questions about the psychological aspects of high profile cases. In
            recent interviews, he has commented on events in the Oskar Pistorius
            trial, the Newtown school shooting, the massacre at the "Dark
            Knight" premiere in Aurora, Colorado, where James Holmes was charged
            with 24 counts of murder, and 116 of attempted murder... the
            Norwegian right-wing extremist who killed more than 80 teens on a
            rampage at a youth camp; and the Long Island serial killer, who is
            believed to have murdered at least ten women, based on bodies
            recovered near Gilgo Beach. Scroll down to view excerpts of some of
            Dr. Reich's appearances in the media.
          </p>
          <p>
            <strong>
              Dr. Reich is interviewed on Good Morning America about the Oskar
              Pistorius case:
            </strong>
          </p>
          <iframe
            src="http://abcnews.go.com/video/embed?id=23879052"
            width="480"
            height="270"
            // style="border:none;"
          />
          <p>
            Dr. Reich interviewed on Good Morning America about the mental
            health evaluation ordered by the court for double-amputee Olympian,
            Oskar Pistorius, accused of the premeditated murder of his
            girlfriend.
          </p>
          <br />
          <p>
            <strong>
              Dr. Reich interviewed in a New Jersey attempted murder case
            </strong>
          </p>
          <p>
            Dr. Stephen Reich, a forensic psychologist, was interviewed for his
            expert analysis of the case of the Rev. Edward Fairley of Paterson,
            NJ, for the national program, "Investigation Discovery." That
            program examines criminal defendants and looks to experts for
            insight on what led to these crimes.
          </p>
          <iframe
            width="400"
            height="300"
            src="//www.youtube.com/embed/3X_k3CsE8wI?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <br />
          <p>
            <strong>
              Tim Fleischer of Channel 7 Eyewitness News asks Dr. Reich's
              opinion:
            </strong>
          </p>
          <iframe
            width="476"
            height="267"
            src="http://abc7ny.com/video/embed/?pid=98683"
            frameborder="0"
            allowfullscreen
          />
          {/* <iframe width="476" height="293" src="http://7online.com/video/embed/?pid=98684" frameborder="0" allowfullscreen></iframe> */}
          <p>
            Dr. Reich comments on whether the accused Brooklyn child killer will
            be found fit to stand trial.
          </p>
          <br />
          <p>
            <strong>
              Dr. Stephen Reich interviewed in special TV report on Jodi Arias:
            </strong>
          </p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/VnZks7MaS9Y?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <br />

          {/* <p><strong>Dr. Reich interviewed on Fraternity Hazing Case on WCBS-TV (New York, New York):</strong></p>
		<script type='text/javascript' src='http://CBSNY.images.worldnow.com/interface/js/WNVideo.js?rnd=535053;hostDomain=video.newyork.cbslocal.com;playerWidth=400;playerHeight=225;isShowIcon=true;clipId=9629889;flvUri=;partnerclipid=;adTag=News;advertisingZone=CBS.NY%252Fworldnowplayer;enableAds=true;landingPage=;islandingPageoverride=false;playerType=STANDARD_EMBEDDEDscript;controlsType=overlay'></script><a href="http://video.newyork.cbslocal.com" title=""></a>
		<br />
		<p>&nbsp;</p> */}

          <p>
            <strong>
              Dr. Reich on ABC World News Tonight (New York, New York):
            </strong>
          </p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/Y2jjkVJGey8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <br />
          <p>
            <strong>Dr. Reich on WABC-TV (New York, New York):</strong>
          </p>
          <object id="otvPlayer" width="400" height="268">
            <param
              name="movie"
              value="http://cdn.abclocal.go.com/static/flash/embeddedPlayer/swf/otvEmLoader.swf?version=fw1000&station=wabc&section=&mediaId=8924768&parentId=8920448&cdnRoot=http://cdn.abclocal.go.com&webRoot=http://abclocal.go.com&configPath=/util/&site="
            />
            <param name="allowScriptAccess" value="always" />
            <param name="allowNetworking" value="all" />
            <param name="allowFullScreen" value="true" />
            <embed
              id="otvPlayer"
              width="400"
              height="268"
              type="application/x-shockwave-flash"
              allowscriptaccess="always"
              allownetworking="all"
              allowfullscreen="true"
              src="http://cdn.abclocal.go.com/static/flash/embeddedPlayer/swf/otvEmLoader.swf?version=fw1000&station=wabc&section=&mediaId=8924768&parentId=8920448&cdnRoot=http://cdn.abclocal.go.com&webRoot=http://abclocal.go.com&configPath=/util/&site="
            />
          </object>
          <p>
            ABC News interviewed Dr. Reich about the Newtown school shooting.
          </p>
          <br />
          <p>
            <strong>Watch Dr. Reich on WGRZ-TV (Buffalo, New York):</strong>
          </p>
          <iframe
            width="400"
            height="225"
            src="http://www.youtube.com/embed/A6Q4Kr8-c8Q?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>
            A Niagara Falls teen stands accused of murdering a five year old
            girl. Dr. Reich sheds light on the issues that investigators will
            consider.
          </p>
          <br />
          <p>
            <strong>Watch Dr. Reich on Alhurra:</strong>
          </p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/N_GQEXdCuF8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>
            The Alhurra TV interview (translated into Arabic), was shown
            worldwide by Alhurra Television. Owned by the Voice of America,
            Alhurra broadcasts Arabic-language news and information to 22
            countries throughout the Middle East and North Africa and is carried
            on cable in European countries with Arabic-speaking populations.
          </p>
          <br />
          {/* <p><strong>Watch Dr. Reich on Nuestra Tele Noticias (NTN24 News):</strong></p>
		<iframe width="400" height="300" src="http://www.youtube.com/embed/990KGq5CkCE?rel=0" frameborder="0" allowfullscreen></iframe>
		<p>Nuestra Tele Noticias 24 Horas [NTN24] is a 24-hour news and analysis network based in Columbia and broadcasting in Spanish and English (both cable and satellite) from Alaska to Patagonia. Here, Dr. Reich is interviewed about the Joker massacre at the "Dark Knight" premiere in Aurora, Colorado.</p>
		<br />
		<p>&nbsp;</p> */}
          <p>
            <strong>
              Watch Dr. Reich on RNN-TV: Interview on the Criminal Mind
            </strong>
          </p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/E5e1x9dDQz8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>
            RNN [Regional News Network] is a 24/7 television channel focused on
            news, investigative reporting, and public affairs programming. Based
            in Westchester County, New York, RNN reaches more than six million
            homes in New York, New Jersey, and Connecticut. Here, Dr. Reich is
            interviewed about the Long Island serial killer who is believed to
            have murdered at least ten women.
          </p>
          <br />
          <p>
            <strong>
              Watch Dr. Reich on Nuestra Tele Noticias (NTN24 News):
            </strong>
          </p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/GjbfQA8vyc8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>
            Here, Dr. Reich is interviewed about the Oslo bombing and Norwegian
            youth camp shooting rampage.
          </p>

          <h3>Radio and Podcasts</h3>
          <p>
            <strong>
              Dr. Stephen Reich interviewed by Bill Carroll on KFI-AM 640
            </strong>
          </p>
          {/* <audio controls autobuffer>
            <source src="clips/stephen_reich_2014-02-17.mp3" />
          </audio> */}
          {/* embed height="16" width="400" src="clips/stephen_reich_2014-02-17.mp3" type="audio/mpeg"</audio> */}
          <p>
            Dr. Reich talks about Miranda Barbour ("the Craigslist Killer") who
            claimed to have killed more than 22 people.
          </p>
          <br />
        </td>
        <Footer />
      </div>
    );
  }
}

export default OnTheAir;
