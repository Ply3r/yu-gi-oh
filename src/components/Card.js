import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/card.css';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      raridade,
      ataque,
      defesa,
      cardImage,
    } = this.props;
    const estrelas = [];
    for(let c = 0; c < raridade; c += 1) {
      estrelas.push(<div className="estrela"></div>)
    }
    return (
      <div className="card">
        <div className="card-intern">
          <h1 data-testid="name-card">{ cardName }</h1>
          <div className="raridade">{ estrelas }</div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <textarea cols="10" rows="5" className="description-card" value={ cardDescription }/>
          <div className="attr-container">
            <p>{ ataque }</p>
            <p>{ defesa }</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  raridade: PropTypes.number.isRequired,
  ataque: PropTypes.number.isRequired,
  defesa: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default Card;
