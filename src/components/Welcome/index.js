import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadQuestions } from '../../ac';

import Intro from './intro';
import Greeting from './greeting';


class Welcome extends Component {

  componentDidMount() {
    const { loadQuestions, loaded, loading } = this.props;
    if (!loaded || !loading) {
      loadQuestions();
    };
  }

  render() {
    return this.props.loaded ? <Greeting /> : < Intro />;
  }
};

export default connect(state => ({
  loaded: state.questions.loadedQuestions,
  loading: state.questions.loadingQuestions
}), { loadQuestions })(Welcome);
