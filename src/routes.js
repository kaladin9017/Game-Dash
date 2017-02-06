import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

import Main from './components/Main';
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import EveToken from './components/widgets/eve-mail/eve-token';
import EveMail from './components/widgets/eve-mail/eve-mail';

export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={YoutubeWidget}/>
    <Route path="/eveToken" component={EveToken}/>
    <Route path="/eveMail" component={EveMail}>
  </Route>
);
