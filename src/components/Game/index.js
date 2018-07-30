import React, { Component } from 'react';
import OneOfThree from './OneOfThree';
import TwoOfTwo from './TwoOfTwo';
import TinderLike from './TinderLike';
import { connect } from 'react-redux';
import { addAnswer } from '../../ac';
import GameHeader from './GameHeader';
import { Limit, AnswersType } from '../../conf';


class Game extends Component {

  state = {
    level: 0,
    time: Limit.TIME,
    lives: Limit.LIVES
  }

  componentDidMount() {
    this.startLevel();
  }

  startLevel() {
    this.timerId = setInterval(() => {
      if (this.state.time <= 0) {
        this.saveAnswer(AnswersType.WRONG);
        this.setState({
          time: Limit.TIME
        });
        this.nextLevel();
      } else {
        this.setState({
          time: this.state.time - 1
        });
      }
    }, 1000);
  }

  getCurrentQuestion() {
    const { questions } = this.props;
    return questions[this.state.level];
  }

  nextLevel() {
    const { lives, level } = this.state;
    if (lives > 0 && level < Limit.LEVELS) {
      this.setState({
        level: this.state.level + 1
      });
    } else {
      this.endGame();
    }
  }

  endGame() {
    const { history } = this.props;
    clearTimeout(this.timerId);
    history.push('./stats');
  }

  getTypeOfAnswer(rightAnswer) {
    const { time } = this.state;
    if (rightAnswer) {
      if (time > Limit.TIME - Limit.FAST_TIME) {
        return 'fast';
      } else if (time < Limit.TIME - Limit.SLOW_TIME) {
        return 'slow';
      } else {
        return `correct`;
      }
    }
    return `wrong`;
  }

  doMistake() {
    if (this.state.lives > 0) {
      this.setState({
        lives: this.state.lives - 1
      });
    }
  }

  saveAnswer(type) {
    const { addAnswer } = this.props;
    addAnswer({
      type: type,
      time: this.state.time,
      question: this.getCurrentQuestion()
    });
  }

  levelHandler(answer) {
    this.saveAnswer(this.getTypeOfAnswer(answer));

    if (!answer) {
      this.doMistake();
    }

    this.nextLevel();
  }

  getBody() {
    switch (this.getCurrentQuestion().type) {
      case 'one-of-three':
        return <OneOfThree data={this.getCurrentQuestion()} levelHandler={this.levelHandler.bind(this)} />;
      case 'two-of-two':
        return <TwoOfTwo data={this.getCurrentQuestion()} levelHandler={this.levelHandler.bind(this)} />;
      case 'tinder-like':
        return <TinderLike data={this.getCurrentQuestion()} levelHandler={this.levelHandler.bind(this)} />;
    };
  }

  render() {
    return (
      <main className="central">
        <div id="main" className="central__content">
          <GameHeader time={this.state.time} lives={this.state.lives} />
          {this.getBody()}
        </div>
      </main>)
  }

};

export default connect(state => ({
  questions: state.questions.data,
  answers: state.answers
}), { addAnswer })(Game);
