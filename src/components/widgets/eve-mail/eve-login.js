import React, { Component } from 'react';
const EVE_PIC = require('../../../assets/eve-login.png');

class EveLogin extends Component {
  render(){
    let mainUrl = "https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2FeveToken&client_id=81577ff7ba9943ca8b95aef5656bc783&scope=";
    let endPoint1 = "esi%2Dmail%2Eorganize%5Fmail%2Ev1%20";
    let endPoint2 = "esi%2Dmail%2Eread%5Fmail%2Ev1%20";
    let endPoint3 = "esi%2Dmail%2Esend%5Fmail%2Ev1";
    let tail = "&state=uniquestate123";
    return (
      <div>
        <a href={mainUrl + endPoint1 + endPoint2 + endPoint3 + tail}>
          <img src={EVE_PIC} />
        </a>
      </div>
    );
  }
}

export default EveLogin;
