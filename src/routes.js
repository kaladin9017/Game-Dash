import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

// IMPORT COMPONENTS
import Main from './components/Main';
import EveScreen from './components/evescreen/evescreenpage';
import InitialScreen from './components/initialscreen/initialscreen';
import WarCraftScreen from './components/warcraftscreen/warcraftscreen';
import MiscScreen from './components/miscscreen/miscscreen';

// IMPORT WIDGETS
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import EveToken from './components/widgets/eve-mail/eve-token';
import EveMail from './components/widgets/eve-mail/eve-mail';

import EveMailSidebar from './components/widgets/eve-mail/eve-mail-sidebar';
import EveMailItem from './components/widgets/eve-mail/eve-mail-item';
import EveMailHeaderList from './components/widgets/eve-mail/eve-mail-header-list';

// FOR TESTING VIEW
import FifteenGame from './components/widgets/fifteen-game/FifteenGame';
import TwitchWidget from './components/widgets/twitch/TwitchWidget';
import WowArmory from './components/widgets/world-of-warcraft/wow-armory/WowArmory';
//

import CalenderWidget from './components/widgets/calender/calender';
import TvWidget from './components/widgets/tv/tv';
import FoodWidget from './components/widgets/food/food';
import GiantBombWidget from './components/widgets/giantBomb/giantBomb';

export default (
  <Route path="/" component={Main}>
				<IndexRoute component={InitialScreen}/>
				<Route path="/evewidgets" component={EveScreen}/>
				<Route path="/warcraftwidgets" component={WowArmory}/>
				<Route path="/miscwidgets" component={MiscScreen}/>
    <Route path="/test" component={YoutubeWidget}/>
    <Route path="/eveToken" component={EveToken}/>
    <Route path="/eveMail" component={EveMail}/>
    <Route path="/cal" component={CalenderWidget}/>
    <Route path="/tv" component={TvWidget}/>
    <Route path="/food" component={FoodWidget}/>
    <Route path="/giant" component={GiantBombWidget}/>
  </Route>
);
