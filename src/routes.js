import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

// IMPORT COMPONENTS
import Main from './components/Main';
import InitialScreen from './components/dashboard/mainDashboard/mainDashboard';

// IMPORT WIDGETS
import EveToken from './components/widgets/eve-mail/eve-token';
import EveMail from './components/widgets/eve-mail/eve-mail';
import EveMailSidebar from './components/widgets/eve-mail/eve-mail-sidebar';
import EveMailItem from './components/widgets/eve-mail/eve-mail-item';
import EveMailHeaderList from './components/widgets/eve-mail/eve-mail-header-list';

import WowArmory from './components/widgets/world-of-warcraft/wow-armory/WowArmory';
import RelmStatusWidget from './components/widgets/world-of-warcraft/relm-status/RelmStatusWidget';
//

// import CalenderWidget from './components/widgets/calender/calender';
import TvWidget from './components/widgets/tv/tv';
import FoodWidget from './components/widgets/food/food';
import GiantBombWidget from './components/widgets/giantBomb/giantBomb';
import FifteenGame from './components/widgets/fifteen-game/FifteenGame';
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import TwitchWidget from './components/widgets/twitch/TwitchWidget';




export default (
  <Route path="/" component={Main}>
		<IndexRoute component={InitialScreen}/>
		<Route path="/armory" component={WowArmory}/>
		<Route path="/relmstatus" component={RelmStatusWidget}/>
    <Route path="/youtube" component={YoutubeWidget}/>
    <Route path="/twitch" component={TwitchWidget}/>
    <Route path="/evetoken" component={EveToken}/>
    <Route path="/evemail" component={EveMail}/>
    <Route path="/tv" component={TvWidget}/>
    <Route path="/food" component={FoodWidget}/>
    <Route path="/giant" component={GiantBombWidget}/>
    <Route path="/fifteen" component={FifteenGame}/>
  </Route>
);
