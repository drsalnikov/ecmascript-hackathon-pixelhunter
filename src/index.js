import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


import Welcome from './components/Welcome';
import Rules from './components/rules';
import Game from './components/Game';
import Stats from './components/Stats';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/rules" component={Rules} />
          <Route path="/game" component={Game} />
          <Route path="/stats" component={Stats} />
          <Route exact path="/" component={Welcome} />
        </div>
      </Router>
    );
  }

};

render(<App />, document.getElementById('app'));
