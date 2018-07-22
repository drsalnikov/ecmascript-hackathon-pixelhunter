import React from 'react';

const GameOne = () => {
  return (
    <section className="game">
      <p className="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form className="game__content">
        <div className="game__option">
          <img src="http://placehold.it/468x458" alt="Option 1" width={468} height={458} />
          <label className="game__answer game__answer--photo">
            <input className="visually-hidden" name="question1" type="radio" defaultValue="photo" />
            <span>Фото</span>
          </label>
          <label className="game__answer game__answer--paint">
            <input className="visually-hidden" name="question1" type="radio" defaultValue="paint" />
            <span>Рисунок</span>
          </label>
        </div>
        <div className="game__option">
          <img src="http://placehold.it/468x458" alt="Option 2" width={468} height={458} />
          <label className="game__answer  game__answer--photo">
            <input className="visually-hidden" name="question2" type="radio" defaultValue="photo" />
            <span>Фото</span>
          </label>
          <label className="game__answer  game__answer--paint">
            <input className="visually-hidden" name="question2" type="radio" defaultValue="paint" />
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <ul className="stats">
        <li className="stats__result stats__result--wrong" />
        <li className="stats__result stats__result--slow" />
        <li className="stats__result stats__result--fast" />
        <li className="stats__result stats__result--correct" />
        <li className="stats__result stats__result--unknown" />
        <li className="stats__result stats__result--unknown" />
        <li className="stats__result stats__result--unknown" />
        <li className="stats__result stats__result--unknown" />
        <li className="stats__result stats__result--unknown" />
        <li className="stats__result stats__result--unknown" />
      </ul>
    </section>
  );
};

export default Intro;
