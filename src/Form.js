import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <p>
            <label htmlFor="">Nome da Carta:</label>
            <input data-testid="name-input" type="text" />
          </p>
          <p>
            <label htmlFor="">Descrição da carta:</label>
            <textarea data-testid="description-input" name="descricao" id="" cols="30" rows="10" />
          </p>
          <p>
            <label htmlFor="">Atributo 1:</label>
            <input data-testid="attr1-input" type="number" name="" id="" />
          </p>
          <p>
            <label htmlFor="">Atributo 2:</label>
            <input data-testid="attr2-input" type="number" name="" id="" />
          </p>
          <p>
            <label htmlFor="">Atributo 3:</label>
            <input data-testid="attr3-input" type="number" name="" id="" />
          </p>
          <p>
            <label htmlFor="">Imagem:</label>
            <input data-testid="image-input" type="text" />
          </p>
          <p>
            <label htmlFor="">Raridade:</label>
            <select data-testid="rare-input" name="" id="">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </p>
          <p>
            <label htmlFor="">Super Trunfo:</label>
            <input data-testid="trunfo-input" type="checkbox" />
          </p>
          <button data-testid="save-button">Salvar</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
