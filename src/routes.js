import React from 'react';
import { Route, Link , IndexRoute} from 'react-router';

import Main from './components/Main';
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';


export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={YoutubeWidget}/>
  </Route>
);
