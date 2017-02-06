import React from 'react';
import { Route, Link , IndexRoute} from 'react-router';

import Main from './components/Main';
import RelmStatusWidget from './components/widgets/world-of-warcraft/relm-status/RelmStatusWidget';

export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={RelmStatusWidget}/>
  </Route>
);
