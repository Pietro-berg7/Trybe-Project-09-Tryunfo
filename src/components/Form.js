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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <p>
          <label htmlFor="nomeDaCarta">
            Nome da Carta:
            <input
              data-testid="name-input"
              type="text"
              id="nomeDaCarta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="descricaoDaCarta">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="descricao"
              id="descricaoDaCarta"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="attr1">
            Atributo 1:
            <input
              data-testid="attr1-input"
              type="number"
              name=""
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="attr2">
            Atributo 2:
            <input
              data-testid="attr2-input"
              type="number"
              name=""
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="attr3">
            Atributo 3:
            <input
              data-testid="attr3-input"
              type="number"
              name=""
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="imagem">
            Imagem:
            <input
              data-testid="image-input"
              type="text"
              id="imagem"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="raridade">
            Raridade:
            <select
              data-testid="rare-input"
              name=""
              id="raridade"
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
          <label htmlFor="superTrunfo">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="superTrunfo"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
