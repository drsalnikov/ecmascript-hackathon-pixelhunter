import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { keyGenerator } from '../../helpers';

const StatUnknow = () => (<li className="stats__result stats__result--unknown" />);
const StatType = ({ type }) => (<li className={'stats__result stats__result--' + type} />);

class GameStats extends Component {

  getStatsLine() {
    const { answers } = this.props;
    return answers.map((answer) => {
      return <StatType type={answer.type} key={uniqid()} />;
    });
  };

  getTailStatsLine() {
    return null;
    const { answers } = this.props;
    return keyGenerator(StatUnknow, 10 - answers.length);
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



