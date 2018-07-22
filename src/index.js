import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import Footer from './components/footer';
import Intro from './components/intro';

class App extends Component {

  static PropTypes = {};

  componentWillMount() {

  }

  showIntro() {

  }


  render() {
    return (
      <Game />
    );
  }

};

const App = () => {
  return (
    <div>
      <Intro />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById('app'));


