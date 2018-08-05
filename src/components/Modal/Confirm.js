import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../ac';
import { withRouter } from 'react-router-dom';

class Confirm extends Component {

  restartHandler = ev => {
    const { restartGame, history, modalCloseHandler } = this.props;
    modalCloseHandler();
    restartGame();
    history.push('/');
  }

  render() {
    return (
      <section className="modal">
        <form className="modal__inner">
          <button onClick={this.props.modalCloseHandler} className="modal__close" type="button">
            <span className="visually-hidden">Закрыть</span>
          </button>
          <h2 className="modal__title">Подтверждение</h2>
          <p className="modal__text">Вы уверены что хотите начать игру заново?</p>
          <div className="modal__button-wrapper">
            <button onClick={this.restartHandler} className="modal__btn">Ок</button>
            <button onClick={this.props.modalCloseHandler} className="modal__btn">Отмена</button>
          </div>
        </form>
      </section>
    );
  }
};

export default connect(null, { restartGame })(withRouter(Confirm));
