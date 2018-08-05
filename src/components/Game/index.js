import React, { Component } from 'react';
import OneOfThree from './OneOfThree';
import TwoOfTwo from './TwoOfTwo';
import TinderLike from './TinderLike';
import { connect } from 'react-redux';
import { addAnswer, mistake, nextLevel, tick, resetTimer } from '../../ac';
import { Limit } from '../../conf';

class Game extends Component {

  state = {
    timer: null
  }

  componentWillMount() {
    if (!this.props.questions) {
      console.log('Error: questions not loaded!');
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    let timer = setInterval(this.startTimer.bind(this), 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  startTimer() {
    const { game: { time }, tick } = this.props;
    if (time <= 0) {
      this.gameHandler(false);
    } else {
      tick();
    }
  }

  getCurrentQuestion() {
    const { questions, game: { level } } = this.props;
    return questions[level];
  }

  getTypeOfAnswer(answer) {
    const { time } = this.props.game;
    if (answer) {
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

  gameHandler(answer) {
    const { mistake, addAnswer, resetTimer, questions, game: { lives, level }, nextLevel } = this.props;
    addAnswer({ type: this.getTypeOfAnswer(answer) });
    if (!answer) {
      mistake();
    }
    resetTimer();

    if (lives > 0 && level < questions.length - 1) {
      nextLevel();
    } else {
      this.endGame();
    }
  }

  endGame() {
    const { history } = this.props;
    history.push('./statssingle');
  }

  render() {
    switch (this.getCurrentQuestion().type) {
      case 'one-of-three':
        return <OneOfThree data={this.getCurrentQuestion()} levelHandler={this.gameHandler.bind(this)} />;
      case 'two-of-two':
        return <TwoOfTwo data={this.getCurrentQuestion()} levelHandler={this.gameHandler.bind(this)} />;
      case 'tinder-like':
        return <TinderLike data={this.getCurrentQuestion()} levelHandler={this.gameHandler.bind(this)} />;
    };
  }

};

export default connect(state => ({
  questions: state.questions.data,
  answers: state.answers,
  game: state.game
}), { addAnswer, mistake, tick, nextLevel, resetTimer })(Game);
