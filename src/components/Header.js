import React, { Component } from 'react';
import { Limit } from '../conf';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { keyGenerator } from '../helpers';
import ModalConfirm from '../components/Modal/Confirm';

const HeartEmpty = () => (<img src="img/heart__empty.svg" className="game__heart" alt="Life" width="31" height="27" />);
const HeartFull = () => (<img src="img/heart__full.svg" className="game__heart" alt="Life" width="31" height="27" />);
const Timer = ({ time }) => (<div className="game__timer">{time}</div>);
const Lives = ({ lives }) => {
  if (lives < 0) {
    console.log('undead lives');
  }

  return (
    <div className="game__lives">
      {keyGenerator(HeartEmpty, Limit.LIVES - lives)}
      {keyGenerator(HeartFull, lives)}
    </div>
  );
}

class Header extends Component {

  state = {
    panelOn: true,
    headerOn: true,
    modalConfirm: false
  }

  modalCloseHandler = evt => {
    this.setState({
      modalConfirm: false
    })
  }

  modalOpenHandler = evt => {
    this.setState({
      modalConfirm: true
    })
  }

  render() {
    const { time, lives } = this.props;
    if (!this.state.headerOn) {
      return null;
    }

    return (
      <header className="header">
        <button onClick={this.modalOpenHandler} className="back">
          <span className="visually-hidden">Вернуться к началу</span>
          <svg className="icon" width={45} height={45} viewBox="0 0 45 45" fill="#000000">
            <use xlinkHref="img/sprite.svg#arrow-left" />
          </svg>
          <svg className="icon" width={101} height={44} viewBox="0 0 101 44" fill="#000000">
            <use xlinkHref="img/sprite.svg#logo-small" />
          </svg>
        </button>
        {this.state.panelOn ? <Timer time={time} /> : null}
        {this.state.panelOn ? <Lives lives={lives} /> : null}
        {this.state.modalConfirm ? <ModalConfirm modalCloseHandler={this.modalCloseHandler} /> : null}
      </header>
    );
  }
};

export default connect(state => ({
  lives: state.game.lives,
  time: state.game.time
}))(Header);
