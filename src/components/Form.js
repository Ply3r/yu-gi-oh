import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/form.css';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      raridade,
      ataque,
      defesa,
      cardImage,
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
    } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          Name:
          <input
            className="normal-input"
            placeholder="Digite o nome da carta"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            id="name-input"
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description-input">
          description:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <input
            className="normal-input"
            min="0"
            max="10"
            name="raridade"
            value={ raridade }
            onChange={ onInputChange }
            id="raridade"
            type="number"
          />
        </label>
        <label htmlFor="attr2-input">
          Ataque:
          <input
            className="normal-input"
            min="0"
            max="5000"
            name="ataque"
            value={ ataque }
            onChange={ onInputChange }
            id="attr2-input"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3-input">
          Defesa:
          <input
            className="normal-input"
            min="0"
            max="5000"
            name="defesa"
            value={ defesa }
            onChange={ onInputChange }
            id="attr3-input"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image-input">
          image:
          <input
            className="normal-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            id="image-input"
            type="text"
          />
        </label>
        <button
          className="save-button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          type="button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  ataque: PropTypes.number.isRequired,
  defesa: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
