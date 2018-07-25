import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Welcome from './components/Welcome';
import Rules from './components/rules';
import Game from './components/Game';
import Stats from './components/Stats';


class App extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/rules" component={Rules} />
            <Route path="/game" component={Game} />
            <Route path="/stats" component={Stats} />
            <Route exact path="/" component={Welcome} />
          </Switch>
        </Router>
      </Provider>
    );
  }

};

render(<App />, document.getElementById('app'));
