import React from 'react';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { onAirText, onAirVideoText, onAirHeaderText } from './data.js';

class OnTheAir extends React.Component {
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
          <h3>{onAirHeaderText[0]}</h3>
          <p>{onAirText[0]}</p>
          <p><strong>{onAirVideoText[0]}</strong></p>
          <iframe
            src="http://abcnews.go.com/video/embed?id=23879052"
            width="480"
            height="270"
          />
          <p>{onAirText[1]}</p>
          <br />
          <p><strong>{onAirVideoText[1]}</strong></p>
          <p>{onAirText[2]}</p>
          <iframe
            width="400"
            height="300"
            src="//www.youtube.com/embed/3X_k3CsE8wI?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <br />
          <p><strong>{onAirVideoText[2]}</strong></p>
          <iframe
            width="476"
            height="267"
            src="http://abc7ny.com/video/embed/?pid=98683"
            frameborder="0"
            allowfullscreen
          />
          {/* <iframe width="476" height="293" src="http://7online.com/video/embed/?pid=98684" frameborder="0" allowfullscreen></iframe> */}
          
          <p>{onAirText[9]}</p>
          <br />
          <p><strong>{onAirVideoText[3]}</strong></p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/VnZks7MaS9Y?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <br />
          <p><strong>{onAirVideoText[4]}</strong></p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/Y2jjkVJGey8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <br />
          <p><strong>{onAirVideoText[5]}</strong></p>
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
          <p>{onAirText[8]}</p>
          <br />
          <p><strong>{onAirVideoText[6]}</strong></p>
          <iframe
            width="400"
            height="225"
            src="http://www.youtube.com/embed/A6Q4Kr8-c8Q?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>{onAirText[3]}</p>
          <br />
          <p><strong>{onAirVideoText[7]}</strong></p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/N_GQEXdCuF8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>{onAirText[4]}</p>
          <br />
          {/* <p><strong>Watch Dr. Reich on Nuestra Tele Noticias (NTN24 News):</strong></p>
		<iframe width="400" height="300" src="http://www.youtube.com/embed/990KGq5CkCE?rel=0" frameborder="0" allowfullscreen></iframe>
		<p>Nuestra Tele Noticias 24 Horas [NTN24] is a 24-hour news and analysis network based in Columbia and broadcasting in Spanish and English (both cable and satellite) from Alaska to Patagonia. Here, Dr. Reich is interviewed about the Joker massacre at the "Dark Knight" premiere in Aurora, Colorado.</p>
		<br />
		<p>&nbsp;</p> */}
          <p><strong>{onAirVideoText[8]}</strong></p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/E5e1x9dDQz8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>{onAirText[5]}</p>
          <br />
          <p><strong>{onAirVideoText[9]}</strong></p>
          <iframe
            width="400"
            height="300"
            src="http://www.youtube.com/embed/GjbfQA8vyc8?rel=0"
            frameborder="0"
            allowfullscreen
          />
          <p>{onAirText[6]}</p>
          <h3>Radio and Podcasts</h3>
          <p><strong>{onAirVideoText[10]}</strong></p>
          {/* <audio controls autobuffer>
            <source src="clips/stephen_reich_2014-02-17.mp3" />
          </audio> */}
          {/* embed height="16" width="400" src="clips/stephen_reich_2014-02-17.mp3" type="audio/mpeg"</audio> */}
          <p>{onAirText[7]}</p>
          <br />
        </td>
        <Footer />
      </div>
    );
  }
}

export default OnTheAir;
