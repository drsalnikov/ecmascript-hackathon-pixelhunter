import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResults } from '../../ac';
import { AnswersType, Scores } from '../../conf';
import GameStats from '../Game/GameStats';

const SpeedBonus = ({ speedAnswers }) => {
  if (!speedAnswers.length) {
    return null;
  }
  const bonus = AnswersType.FAST - AnswersType.CORRECT;
  return (
    <tr>
      <td className="result__extra">Бонус за скорость:</td>
      <td className="result__extra">{speedAnswers.length}<span className="stats__result stats__result--fast" /></td>
      <td className="result__points">× {bonus}</td>
      <td className="result__total">{speedAnswers.length * bonus}</td>
    </tr>
  );
};

const LiveBonus = ({ lives }) => {
  if (lives < 1) {
    return null;
  }
  return (
    <tr>
      <td className="result__extra">Бонус за жизни:</td>
      <td className="result__extra">{lives}<span className="stats__result stats__result--alive" /></td>
      <td className="result__points">× 50</td>
      <td className="result__total">{lives * 50}</td>
    </tr>
  );
};

const SlownessBonus = ({ slownessAnswers }) => {
  if (!slownessAnswers.length) {
    return null;
  }
  const fine = AnswersType.SLOW - AnswersType.CORRECT;
  return (
    <tr>
      <td className="result__extra">Штраф за медлительность:</td>
      <td className="result__extra">{slownessAnswers.length} <span className="stats__result stats__result--slow" /></td>
      <td className="result__points">× {fine}</td>
      <td className="result__total">{slownessAnswers.length * fine}</td>
    </tr>
  );
};

const Total = ({ totalScores, countFast, countCorrect, countSlow }) => {
  return (
    <tr>
      <td colSpan={2}>
        <GameStats />
      </td>
      {countFast ? (<td className="result__points"> {countFast} × 150</td>) : null}
      {countCorrect ? (<td className="result__points"> {countCorrect} × 100</td>) : null}
      {countSlow ? (<td className="result__points"> {countSlow} × 50</td>) : null}
      <td className="result__total">{totalScores}</td>
    </tr>
  );
};

class StatsSingle extends Component {

  componentDidMount() {
    const { postResults, posting, posted } = this.props;
    if (!posted || !posting) {
      postResults();
    };
  }

  render() {
    const { answers, lives } = this.props;
    const correctAnswers = answers.filter(answer => answer === AnswersType.CORRECT);
    const slownessAnswers = answers.filter(answer => answer === AnswersType.SLOW);
    const speedAnswers = answers.filter(answer => answer === AnswersType.FAST);

    const totalScores = answers.reduce((scores, answer) => {
      switch (answer) {
        case AnswersType.FAST:
          return scores + Scores.FAST;
        case AnswersType.CORRECT:
          return scores + Scores.CORRECT;
        case AnswersType.SLOW:
          return scores + Scores.SLOW;
        default:
          return scores;
      }
    }, 0);

    const result = (answers.length > 9)

    return (
      <section className="result">
        <h2 className="result__title result__title--single">
          {result ? 'WIN ' + totalScores : 'FAIL'}
        </h2>
        <table className="result__table result__table--single">
          <tbody>
            <Total
              totalScores={totalScores}
              countCorrect={correctAnswers.length}
              countSlow={slownessAnswers.length}
              countFast={speedAnswers.length}
            />
            <SpeedBonus speedAnswers={speedAnswers} />
            <LiveBonus lives={lives} />
            <SlownessBonus slownessAnswers={slownessAnswers} />
          </tbody></table>
      </section>
    );
  }
};


export default connect(state => ({
  answers: state.answers,
  lives: state.game.lives,
  posting: state.stats.posting,
  posted: state.stats.posted
}), { postResults })(StatsSingle);
