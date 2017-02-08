import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

// IMPORT COMPONENTS
import Main from './components/Main';
import EveScreen from './components/evescreen/evescreenpage'
import InitialScreen from './components/initialscreen/initialscreen'

// IMPORT WIDGETS
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import EveToken from './components/widgets/eve-mail/eve-token';
import EveMail from './components/widgets/eve-mail/eve-mail';

export default (
  <Route path="/" component={Main}>
  	<IndexRoute component={InitialScreen}/>
  	<Route path="/evewidgets" component={EveScreen}/>
    <Route path="/test" component={YoutubeWidget}/>
    <Route path="/eveToken" component={EveToken}/>
    <Route path="/eveMail" component={EveMail}/>
  </Route>
);
