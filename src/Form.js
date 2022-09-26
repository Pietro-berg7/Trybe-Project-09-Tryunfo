import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <p>
          <label htmlFor="nomeDaCarta">
            Nome da Carta:
            <input data-testid="name-input" type="text" id="nomeDaCarta" />
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
            />
          </label>
        </p>
        <p>
          <label htmlFor="raridade">
            Raridade:
            <select data-testid="rare-input" name="" id="raridade">
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
            />
          </label>
        </p>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
