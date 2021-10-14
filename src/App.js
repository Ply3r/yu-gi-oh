import React from 'react';
import { Link } from 'react-router-dom';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import store from './store';
import gameAction from './actions';
import './css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      raridade: 0,
      ataque: 0,
      defesa: 0,
      cardImage: '',
      isSaveButtonDisabled: true,
      savedCards: [],
      filterName: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'cardTrunfo' || name === 'filterTrunfo') {
      const { checked } = target;
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value },
        () => {
          this.isButtonDisabled();
        });
    }
  }

  onSaveButtonClick = () => {
    const {
      raridade,
      ataque,
      defesa,
      cardName,
      cardImage,
      cardDescription,
      cardTrunfo,
      savedCards,
    } = this.state;
    const obj = {
      raridade,
      ataque,
      defesa,
      cardName,
      cardImage,
      cardDescription,
      cardTrunfo,
    };
    const array = [...savedCards, obj]
    const json = JSON.stringify(array)
    localStorage.setItem('cards', json)
    this.setState({ savedCards: array });
    store.dispatch(gameAction(array));
    this.setState({
      cardName: '',
      cardDescription: '',
      raridade: 0,
      ataque: 0,
      defesa: 0,
      cardImage: '',
      cardTrunfo: false,
    });
  }

  isButtonDisabled = () => {
    const {
      raridade,
      ataque,
      defesa,
      cardName,
      cardImage,
      cardDescription,
    } = this.state;
    if (cardName && cardImage && cardDescription) {
      this.setState({ isSaveButtonDisabled: false });
      const maxPer = 5000;
      const minPer = 0;
      const maxRaridade = 10;
      

      if (!raridade || !ataque || !defesa) {
        this.setState({ isSaveButtonDisabled: true });
      }

      if (raridade < minPer || ataque < minPer || defesa < minPer) {
        this.setState({ isSaveButtonDisabled: true });
      }

      if (raridade > maxRaridade || ataque > maxPer || defesa > maxPer) {
        this.setState({ isSaveButtonDisabled: true });
      }
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  deleteCard = ({ target: { id } }) => {
    const { savedCards } = this.state;
    const newSavedCards = savedCards.filter((item) => item.cardName !== id);
    this.setState({ savedCards: newSavedCards });
    const json = JSON.stringify(newSavedCards)
    localStorage.setItem('cards', json)
    store.dispatch(gameAction(newSavedCards))
  }

  cartas = () => {
    const { savedCards, filterName } = this.state;
    let hold = savedCards;
    
    if (filterName) {
      const regex = new RegExp(filterName, 'i');
      hold = savedCards.filter((item) => regex.test(item.cardName));
    }

    const res = hold
      .map(
        ({ cardName, cardDescription, raridade,
          ataque, defesa, cardImage, cardTrunfo,
        }, index) => (
          <div className="card-show" key={ index } id={ index }>
            <Card
              key={ cardName }
              cardName={ cardName }
              cardDescription={ cardDescription }
              raridade={ raridade }
              ataque={ ataque }
              defesa={ defesa }
              cardImage={ cardImage }
              cardTrunfo={ cardTrunfo }
            />
            <button
              onClick={ this.deleteCard }
              id={ cardName }
              className="bot-excluir"
              type="button"
            >
              Excluir
            </button>
          </div>
        ),
      );
    return res;
  }

  componentDidMount() {
    const json = localStorage.getItem('cards');
    const array = JSON.parse(json)
    this.setState({ savedCards: array })
    store.dispatch(gameAction(array))
  }

  render() {
    const { cardName, cardDescription, raridade,
      ataque, filterName, defesa, cardImage,
      isSaveButtonDisabled } = this.state;
    return (
      <>
        <div className="form-container">
          <div className="div-container form">
            <h2 className="title">Adicionar nova carta</h2>
            <Form
              onInputChange={ this.onInputChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              raridade={ raridade }
              ataque={ ataque }
              defesa={ defesa }
              cardImage={ cardImage }
              onSaveButtonClick={ this.onSaveButtonClick }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
          </div>
          <div className="div-container card-container">
            <h2 className="pre-vizu">Pre-vizualização:</h2>
            <Card
              onInputChange={ this.onInputChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              raridade={ raridade }
              ataque={ ataque }
              defesa={ defesa }
              cardImage={ cardImage }
            />
          </div>
        </div>
        <div class="container">
          <Link to="/yu-gi-oh/game">
            <button className="jogar-bot" type="button">Jogar</button>
          </Link>
        </div>
        <div className="filtros-container">
          <Filter
            filterName={ filterName }
            onInputChange={ this.onInputChange }
          />
        </div>
        <div className="grid-container">
          {this.cartas()}
        </div>
      </>
    );
  }
}

export default App;
