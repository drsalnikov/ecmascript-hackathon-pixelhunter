import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUsername } from '../ac';
import { withRouter } from 'react-router';

class Rules extends Component {
  static propTypes = {
    username: PropTypes.string
  };

  state = {
    username: '',
    disabled: true
  }

  handleSubmit = ev => {
    const { history } = this.props;
    ev.preventDefault();
    this.props.addUsername(this.state.username);
    history.push('/game');
  }

  handleChange = ev => {
    const { value } = ev.target;
    this.setState({
      username: value,
      disabled: !(value.length > 0)
    });
  }

  render() {
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
        </header>
        <section className="rules">
          <h2 className="rules__title">Правила</h2>
          <ul className="rules__description">
            <li>Угадай 10 раз для каждого изображения фото
              <img className="rules__icon" src="img/icon-photo.png" width={32} height={31} alt="Фото" /> или рисунок
              <img className="rules__icon" src="img/icon-paint.png" width={32} height={31} alt="Рисунок" /></li>
            <li>Фотографиями или рисунками могут быть оба изображения.</li>
            <li>На каждую попытку отводится 30 секунд.</li>
            <li>Ошибиться можно не более 3 раз.</li>
          </ul>
          <p className="rules__ready">Готовы?</p>
          <form className="rules__form" onSubmit={this.handleSubmit}>
            <input value={this.state.username} onChange={this.handleChange} className="rules__input" type="text" placeholder="Ваше Имя" />
            <button className="rules__button  continue" type="submit" disabled={this.state.disabled}>Go!</button>
          </form>
        </section>
      </div>
    );
  };
};

export default withRouter(connect(state => ({
  username: state.username
}), { addUsername })(Rules));
