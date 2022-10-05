import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <p>
          <label htmlFor="cardName">
            Nome da Carta:
            <input
              data-testid="name-input"
              type="text"
              id="cardName"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="cardDescription">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="cardDescription"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="cardAttr1">
            Atributo 1:
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="cardAttr2">
            Atributo 2:
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="cardAttr3">
            Atributo 3:
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="cardImage">
            Imagem:
            <input
              data-testid="image-input"
              type="text"
              id="cardImage"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="cardRare">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </p>
        <p>
          <label htmlFor="cardTrunfo">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
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
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
