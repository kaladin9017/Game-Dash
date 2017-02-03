import React from 'react';
import { Route, Link , IndexRoute} from 'react-router';

import Main from './components/Main';
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import EveLogin from './components/widgets/eve-mail/eve-login';
import EveToken from './components/widgets/eve-mail/eve-token';
import EveSidebar from './components/widgets/eve-mail/eve-mail-sidebar';
import EveHeaderList from './components/widgets/eve-mail/eve-mail-header';
import EveMailItem from './components/widgets/eve-mail/eve-mail-item';

export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={YoutubeWidget}/>
    <Route path="/eve" component={EveLogin}/>
    <Route path="/eveToken" component={EveToken}>
      <IndexRoute component={EveSidebar}/>
      <Route path="/eveToken/headerList" component={EveHeaderList}/>
      <Route path="/eveToken/mailItem" component={EveMailItem}/>
    </Route>
  </Route>
);
