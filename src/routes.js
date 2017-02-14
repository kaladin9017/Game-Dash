import React from 'react';
import { Route, Link , IndexRoute } from 'react-router';

import Main from './components/Main';
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import EveToken from './components/widgets/eve-mail/eve-token';
import EveMail from './components/widgets/eve-mail/eve-mail';
import CalenderWidget from './components/widgets/calender/calender';
import TvWidget from './components/widgets/tv/tv';
import FoodWidget from './components/widgets/food/food';
import GiantBombWidget from './components/widgets/giantBomb/giantBomb';

export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={YoutubeWidget}/>
    <Route path="/eveToken" component={EveToken}/>
    <Route path="/eveMail" component={EveMail}/>
    <Route path="/cal" component={CalenderWidget}/>
    <Route path="/tv" component={TvWidget}/>
    <Route path="/food" component={FoodWidget}/>
    <Route path="/giant" component={GiantBombWidget}/>
  </Route>
);
