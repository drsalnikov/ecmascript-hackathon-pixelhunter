import React from 'react';
import GameStats from './GameStats';

const TinderLike = ({ data: { question, answers }, levelHandler }) => {

  const changeHandler = ({ target }) => {
    const answer = answers[0].type;
    levelHandler(target.value === answer);
    target.checked = false;
  };

  return (
    <section className="game">
      <p className="game__task">{question}</p>
      <form className="game__content  game__content--wide" onChange={changeHandler}>
        <div className="game__option">
          <img src={answers[0].image.url} alt="Option 1" width={answers[0].image.width} height={answers[0].image.height} />
          <label className="game__answer  game__answer--photo">
            <input className="visually-hidden" name="question1" type="radio" defaultValue="photo" />
            <span>Фото</span>
          </label>
          <label className="game__answer  game__answer--paint">
            <input className="visually-hidden" name="question1" type="radio" defaultValue="painting" />
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <GameStats />
    </section>
  );
};

export default TinderLike;
