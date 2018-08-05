import React from 'react';

const Error = () => {
  return (
    <section className="modal">
      <div className="modal__inner">
        <h2 className="modal__title">Произошла ошибка!</h2>
        <p className="modal__text modal__text--error">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
      </div>
    </section>
  );
};

export default Error;
