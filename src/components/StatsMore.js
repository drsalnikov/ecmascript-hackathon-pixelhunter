import React from 'react';

const StatsMore = () => {
  return (
    <div>
      <header className="header">
        <button className="back">
          <span className="visually-hidden">Вернуться к началу</span>
          <svg className="icon" width={45} height={45} viewBox="0 0 45 45" fill="#000000">
            <use xlinkHref="img/sprite.svg#arrow-left" />
          </svg>
          <svg className="icon" width={101} height={44} viewBox="0 0 101 44" fill="#000000">
            <use xlinkHref="img/sprite.svg#logo-small" />
          </svg>
        </button>
        <div className="header__tabs">
          <button className="tab tab--active">Ты</button>
          <button className="tab">Топ 50</button>
        </div>
      </header>
      <section className="result">
        <p className="result__text">У тебя
            <span id="result__score">28 650 очков</span> и
            <span id="result__place">3</span> место в топе</p>
        <table className="result__table">
          <tbody><tr>
            <td className="result__number">1.</td>
            <td colSpan={2}>
              <ul className="stats">
                <li className="stats__result stats__result--wrong" />
                <li className="stats__result stats__result--slow" />
                <li className="stats__result stats__result--fast" />
                <li className="stats__result stats__result--correct" />
                <li className="stats__result stats__result--wrong" />
                <li className="stats__result stats__result--unknown" />
                <li className="stats__result stats__result--slow" />
                <li className="stats__result stats__result--unknown" />
                <li className="stats__result stats__result--fast" />
                <li className="stats__result stats__result--unknown" />
              </ul>
            </td>
            <td className="result__points">× 100</td>
            <td className="result__total">900</td>
          </tr>
            <tr>
              <td />
              <td className="result__extra">Бонус за скорость:</td>
              <td className="result__extra">1 <span className="stats__result stats__result--fast" /></td>
              <td className="result__points">× 50</td>
              <td className="result__total">50</td>
            </tr>
            <tr>
              <td />
              <td className="result__extra">Бонус за жизни:</td>
              <td className="result__extra">2 <span className="stats__result stats__result--alive" /></td>
              <td className="result__points">× 50</td>
              <td className="result__total">100</td>
            </tr>
            <tr>
              <td />
              <td className="result__extra">Штраф за медлительность:</td>
              <td className="result__extra">2 <span className="stats__result stats__result--slow" /></td>
              <td className="result__points">× 50</td>
              <td className="result__total">-100</td>
            </tr>
            <tr>
              <td colSpan={5} className="result__total  result__total--final">950</td>
            </tr>
          </tbody></table>
        <table className="result__table">
          <tbody><tr>
            <td className="result__number">2.</td>
            <td>
              <ul className="stats">
                <li className="stats__result stats__result--wrong" />
                <li className="stats__result stats__result--slow" />
                <li className="stats__result stats__result--fast" />
                <li className="stats__result stats__result--correct" />
                <li className="stats__result stats__result--wrong" />
                <li className="stats__result stats__result--unknown" />
                <li className="stats__result stats__result--slow" />
                <li className="stats__result stats__result--wrong" />
                <li className="stats__result stats__result--fast" />
                <li className="stats__result stats__result--wrong" />
              </ul>
            </td>
            <td className="result__total" />
            <td className="result__total  result__total--final">fail</td>
          </tr>
          </tbody></table>
        <table className="result__table">
          <tbody><tr>
            <td className="result__number">3.</td>
            <td colSpan={2}>
              <ul className="stats">
                <li className="stats__result stats__result--wrong" />
                <li className="stats__result stats__result--slow" />
                <li className="stats__result stats__result--fast" />
                <li className="stats__result stats__result--correct" />
                <li className="stats__result stats__result--wrong" />
                <li className="stats__result stats__result--unknown" />
                <li className="stats__result stats__result--slow" />
                <li className="stats__result stats__result--unknown" />
                <li className="stats__result stats__result--fast" />
                <li className="stats__result stats__result--unknown" />
              </ul>
            </td>
            <td className="result__points">× 100</td>
            <td className="result__total">900</td>
          </tr>
            <tr>
              <td />
              <td className="result__extra">Бонус за жизни:</td>
              <td className="result__extra">2 <span className="stats__result stats__result--alive" /></td>
              <td className="result__points">× 50</td>
              <td className="result__total">100</td>
            </tr>
            <tr>
              <td colSpan={5} className="result__total  result__total--final">950</td>
            </tr>
          </tbody></table>
      </section>
    </div>
  );
};

export default StatsMore;
