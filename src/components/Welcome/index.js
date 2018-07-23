import React, { Component } from 'react';

import Intro from './intro';
import Greeting from './greeting';


class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 2000);
  }

  getScreen() {
    return (this.state.loaded) ? <Greeting /> : <Intro />;
  }

  render() {
    return (
      <main className="central">
        <div id="main" className="central__content">
          {this.getScreen()}
        </div>
      </main>
    );
  }
};

export default Welcome;
