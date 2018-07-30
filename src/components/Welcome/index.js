import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadQuestions } from '../../ac';

import Intro from './intro';
import Greeting from './greeting';


class Welcome extends Component {

  componentDidMount() {
    const { loadQuestions, loaded, loading } = this.props
    if (!loaded || !loading) {
      loadQuestions();
    };
  }

  getBody() {
    const { loaded } = this.props;
    return loaded ? <Greeting /> : < Intro />;
  }

  render() {
    return (
      <main className="central">
        <div id="main" className="central__content">
          {this.getBody()}
        </div>
      </main>
    );
  }
};

export default connect(state => ({
  loaded: state.questions.loadedQuestions,
  loading: state.questions.loadingQuestions
}), { loadQuestions })(Welcome);
