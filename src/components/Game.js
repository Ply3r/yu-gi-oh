import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import store from '../store';
import '../css/game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [],
      position: 0,
      embaralhar: false,
    };
  }

  componentDidMount() {
    this.getState();
  }

  getState = () => {
    const { gameReducer: { game } } = store.getState();
    this.setState({ game });
  }

  nextCard = () => {
    const { position, game } = this.state;
    if (position < game.length - 1) {
      this.setState({ position: position + 1 }, () => {
        if (position + 1 === game.length - 1) {
          this.setState({ embaralhar: true });
        }
      });
    }
  }

  embaralharCartas = () => {
    const { game } = this.state;
    const metade = 0.5;
    const sorted = game.sort(() => Math.random() - metade);
    this.setState({ game: sorted, position: 0, embaralhar: false });
  }

  render() {
    const { game, position, embaralhar } = this.state;
    const obj = game[position];
    return (
      <div className="game-main-container">
        <Link to="/">
          <p className="link"><FontAwesomeIcon icon={faArrowLeft}/> Voltar para a pagina inicial</p>
        </Link>
        <h1 className="title-game">Yu Gi Oh!</h1>
        <div className="cards-container-game">
          <div>
            { game.length ? <Card
              key={ obj.cardName }
              cardName={ obj.cardName }
              cardDescription={ obj.cardDescription }
              raridade={ obj.raridade }
              ataque={ obj.ataque }
              defesa={ obj.defesa }
              cardImage={ obj.cardImage }
              cardRare={ obj.cardRare }
              cardTrunfo={ obj.cardTrunfo }
            /> : '' }
          </div>
          { !embaralhar ? <div onClick={ this.nextCard } className="next-card" /> : ''}
        </div>
        <p>
          Tamanho do baralho: 
          <span>{ game.length }</span>
        </p>
        { embaralhar
          ? <button type="button" onClick={ this.embaralharCartas }>Embaralhar</button>
          : '' }
      </div>
    );
  }
}

export default Game;
