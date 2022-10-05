import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => this.validadeForm());
  };

  onSaveButtonClick = () => {};

  validadeForm = () => {
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
