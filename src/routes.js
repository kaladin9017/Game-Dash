import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

import Main from './components/Main';
import EveToken from './components/widgets/eve-mail/eve-token';
import EveMail from './components/widgets/eve-mail/eve-mail';


// FOR TESTING VIEW
import FifteenGame from './components/widgets/fifteen-game/FifteenGame';
import TwitchWidget from './components/widgets/twitch/TwitchWidget';
//

export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={FifteenGame}/>
    <Route path="/eveToken" component={EveToken}/>
    <Route path="/eveMail" component={EveMail}/>
  </Route>
);
