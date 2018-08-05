import React from 'react';
import GameStats from './GameStats';
import uniqid from 'uniqid';

const getRightAnswer = (question) => {
  const RIGHT_ANSWER = {
    'Найдите рисунок среди изображений': 'painting',
    'Найдите фото среди изображений': 'photo'
  };
  return RIGHT_ANSWER[question];
};

const Option = ({ answer, rightAnswer, levelHandler }) => {
  const handler = () => (levelHandler(answer.type === rightAnswer));
  const divStyle = {
    border: '5px solid yellow'
  };

  return (
    <div className="game__option" >
      <img onClick={handler}
        style={(answer.type === rightAnswer) ? divStyle : {}}
        src={answer.image.url}
        width={answer.image.width}
        height={answer.image.height} />
    </div>
  );
};

const OneOfThree = ({ data: { question, answers }, levelHandler }) => {
  const rightAnswer = getRightAnswer(question);
  return (
    <section className="game">
      <p className="game__task">{question}</p>
      <form className="game__content  game__content--triple" >
        {answers.map((answer) => {
          return (<Option key={uniqid()} answer={answer} rightAnswer={rightAnswer} levelHandler={levelHandler} />);
        })}
      </form>
      <GameStats />
    </section>
  );
};


export default OneOfThree;
