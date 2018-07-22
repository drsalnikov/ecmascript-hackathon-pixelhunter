import React from 'react';

const Intro = () => {
  return (
    <main className="central">
      <div id="main" className="central__content">
        <section id="intro" className="intro">
          <button className="intro__asterisk asterisk" type="button"><span className="visually-hidden">Продолжить</span>*</button>
          <p className="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
          <button className="intro__top top" type="button">
            <img src="img/icon-top.svg" width="71" height="79" alt="Топ игроков" />
          </button>
        </section>
      </div>
    </main>
  );
};

export default Intro;
