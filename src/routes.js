import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

// IMPORT COMPONENTS
import Main from './components/Main';
import EveScreen from './components/evescreen/evescreenpage'
import InitialScreen from './components/initialscreen/initialscreen'
import WarCraftScreen from './components/warcraftscreen/warcraftscreen'
import MiscScreen from './components/miscscreen/miscscreen'

// IMPORT WIDGETS
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import EveToken from './components/widgets/eve-mail/eve-token';
import EveMail from './components/widgets/eve-mail/eve-mail';

export default (
  <Route path="/" component={Main}>
  	<IndexRoute component={InitialScreen}/>
  	<Route path="/evewidgets" component={EveScreen}/>
  	<Route path="/warcraftwidgets" component={WarCraftScreen}/>
  	<Route path="/miscscreen" component={MiscScreen}/>
    <Route path="/test" component={YoutubeWidget}/>
    <Route path="/eveToken" component={EveToken}/>
    <Route path="/eveMail" component={EveMail}/>
  </Route>
);
