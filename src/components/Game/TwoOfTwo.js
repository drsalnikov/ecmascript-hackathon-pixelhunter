import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import GameStats from './GameStats';

class TwoOfTwo extends Component {

  state = {
    question1Selected: '',
    question2Selected: ''
  }

  changeHandler({ target }) {
    if (target.name === 'question1') {
      this.setState({
        question1Selected: target.value
      });
    }
    if (target.name === 'question2') {
      this.setState({
        question2Selected: target.value
      });
    }
  }

  render() {
    const { question1Selected, question2Selected } = this.state;
    const { data: { answers, question }, levelHandler } = this.props;
    if (question1Selected && question2Selected) {
      const rule = answers[0].type === question1Selected && answers[1].type === question2Selected;
      levelHandler(rule);
    }

    return (
      <section className="game" >
        <p className="game__task">{question}</p>
        <form onChange={this.changeHandler.bind(this)} className="game__content">
          <div className="game__option">
            <img src={answers[0].image.url} alt="Option" width={answers[0].image.width} height={answers[0].image.height} />
            <label className="game__answer game__answer--photo">
              <input checked={this.state.question1Selected === 'photo'} className="visually-hidden" name="question1" type="radio" defaultValue="photo" />
              <span>Фото</span>
            </label>
            <label className="game__answer game__answer--paint">
              <input checked={this.state.question1Selected === 'painting'} className="visually-hidden" name="question1" type="radio" defaultValue="painting" />
              <span>Рисунок</span>
            </label>
          </div>
          <div className="game__option">
            <img src={answers[1].image.url} alt="Option" width={answers[1].image.width} height={answers[1].image.height} />
            <label className="game__answer game__answer--photo">
              <input checked={this.state.question2Selected === 'photo'} className="visually-hidden" name="question2" type="radio" defaultValue="photo" />
              <span>Фото</span>
            </label>
            <label className="game__answer game__answer--paint">
              <input checked={this.state.question2Selected === 'painting'} className="visually-hidden" name="question2" type="radio" defaultValue="painting" />
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        <GameStats />
      </section >
    );
  }
};

export default TwoOfTwo;
