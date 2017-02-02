import React from 'react';
import { Route, Link , IndexRoute} from 'react-router';

import Main from './components/Main';
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import EveLogin from './components/widgets/eve-mail/eve-login';
import EveToken from './components/widgets/eve-mail/eve-token';


export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={YoutubeWidget}/>
    <Route path="/eve" component={EveLogin}/>
    <Route path="/eveToken" component={EveToken}/>
  </Route>
);
