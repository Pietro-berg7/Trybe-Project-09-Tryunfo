import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      filteredCards: [],
    };
  }

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => this.validateForm());
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
    } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      savedCards: [
        ...savedCards,
        card,
      ],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }, () => this.trunfoExists());
  };

  validateForm = () => {
    const maxStat = 90;
    const allStatMax = 210;
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    if (
      cardName !== ''
      && cardImage !== ''
      && cardDescription !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxStat)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxStat)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxStat)
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= allStatMax)
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else this.setState({ isSaveButtonDisabled: true });
  };

  trunfoExists = () => {
    const { savedCards } = this.state;
    if (savedCards.some((element) => element.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  deleteCard = ({ target }) => {
    const { savedCards } = this.state;
    const cards = savedCards
      .filter((element) => element.cardName !== target.id);
    this.setState({
      savedCards: cards,
    }, this.trunfoExists);
  };

  handleSearchName = ({ target }) => {
    const { savedCards } = this.state;
    const filter = savedCards
      .filter((card) => (card.cardName)
        .includes(target.value));
    this.setState({
      filteredCards: filter,
    });
  };

  handleSearchRarity = ({ target }) => {
    const { savedCards } = this.state;
    const filter = savedCards
      .filter((card) => card.cardRare === target.value);
    if (target.value === 'todas') {
      this.setState({
        filteredCards: savedCards,
      });
    } else {
      this.setState({
        filteredCards: filter,
      });
    }
  };

  render() {
    const { filteredCards } = this.state;
    return (
      <>
        <div>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </div>
        <section>
          <label htmlFor="searchValue">
            Pesquisar:
            <input
              data-testid="name-filter"
              type="text"
              id="searchName"
              onChange={ this.handleSearchName }
            />
          </label>
        </section>
        <select
          data-testid="rare-filter"
          name="searchRarity"
          id="searchRarity"
          onClick={ this.handleSearchRarity }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        { filteredCards
          .map((element) => (
            <div key={ element.cardName }>
              <Card
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                id={ element.cardName }
                onClick={ this.deleteCard }
              >
                Excluir
              </button>
            </div>
          ))}
      </>
    );
  }
}

export default App;
