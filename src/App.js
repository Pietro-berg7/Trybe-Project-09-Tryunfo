import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
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
    if (savedCards.some((element) => element.cardTrunfo !== true)) {
      this.setState({ hasTrunfo: false });
    } else {
      this.setState({ hasTrunfo: true });
    }
  };

  render() {
    return (
      <>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
      </>
    );
  }
}

export default App;
