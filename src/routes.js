import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

// IMPORT COMPONENTS
import Main from './components/Main';

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
import StreamWidget from './components/widgets/stream/StreamWidget';

// Settings
import SettingsWidget from './components/widgets/settings-widget/SettingsWidget';

import GameReviewWidget from './components/widgets/gameReviews/gameReview';

export default (
  <Route path="/" component={Main}>
		<Route path="/armory" component={WowArmory}/>
		<Route path="/relmstatus" component={RelmStatusWidget}/>
    <Route path="/youtube" component={YoutubeWidget}/>
    <Route path="/twitch" component={TwitchWidget}/>
    <Route path="/evetoken" component={EveToken}/>
    <Route path="/eveMail" component={EveMail}/>
    <Route path="/tv" component={TvWidget}/>
    <Route path="/food" component={FoodWidget}/>
    <Route path="/giant" component={GiantBombWidget}/>
    <Route path="/fifteen" component={FifteenGame}/>
    <Route path="/settings" component={SettingsWidget}/>
    <Route path="/reviews" component={GameReviewWidget}/>
    <Route path="/stream" component={StreamWidget}/>
  </Route>
);
