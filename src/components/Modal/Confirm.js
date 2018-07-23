import React from 'react';

const ModalConfirm = () => {
  return (
    <section className="modal">
      <form className="modal__inner">
        <button className="modal__close" type="button">
          <span className="visually-hidden">Закрыть</span>
        </button>
        <h2 className="modal__title">Подтверждение</h2>
        <p className="modal__text">Вы уверены что хотите начать игру заново?</p>
        <div className="modal__button-wrapper">
          <button className="modal__btn">Ок</button>
          <button className="modal__btn">Отмена</button>
        </div>
      </form>
    </section>
  );
};

export default ModalConfirm;
