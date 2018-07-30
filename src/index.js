import React, { Component } from 'react';
import { render } from 'react-dom';
//import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Welcome from './components/Welcome';
import Rules from './components/rules';
import Game from './components/Game';
import Stats from './components/Stats';
import StatsMore from './components/Stats/StatsMore';
import StatsSingle from './components/Stats/StatsSingle';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/rules" component={Rules} />
            <Route path="/game" component={Game} />
            <Route path="/stats" component={Stats} />
            <Route path="/statsmore" component={StatsMore} />
            <Route path="/statssingle" component={StatsSingle} />
            <Route exact path="/" component={Welcome} />
          </Switch>
        </Router>
      </Provider>
    );
  }

};

render(<App />, document.getElementById('app'));
