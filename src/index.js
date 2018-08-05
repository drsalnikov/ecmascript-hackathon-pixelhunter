import React, { Component } from 'react';
import { render } from 'react-dom';
//import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Welcome from './components/Welcome';
import Rules from './components/Rules';
import Game from './components/Game';
import Stats from './components/Stats';
import StatsMore from './components/Stats/StatsMore';
import StatsSingle from './components/Stats/StatsSingle';
import Wrapper from './components/Wrapper';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/rules" component={Wrapper(Rules)} />
            <Route path="/game" component={Wrapper(Game)} />
            <Route path="/stats" component={Wrapper(Stats)} />
            <Route path="/statsmore" component={Wrapper(StatsMore)} />
            <Route path="/statssingle" component={Wrapper(StatsSingle)} />
            <Route exact path="/" component={Wrapper(Welcome)} />
          </Switch>
        </Router>
      </Provider>
    );
  }

};

render(<App />, document.getElementById('app'));
