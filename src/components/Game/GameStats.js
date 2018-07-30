import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameStats extends Component {

  getStatsLine() {
    const { answers } = this.props;
    return answers.map((answer) => {
      return <li className={'stats__result stats__result--' + answer.type} />;
    });
  };

  getTailStatsLine() {
    return new Array(10 - this.getStatsLine().length).fill(<li className="stats__result stats__result--unknown" />);
  };

  render() {
    return (
      <ul className="stats">
        {this.getStatsLine()}
        {this.getTailStatsLine()}
      </ul>
    );
  }
};

export default connect(state => ({
  answers: state.answers
}))(GameStats);



