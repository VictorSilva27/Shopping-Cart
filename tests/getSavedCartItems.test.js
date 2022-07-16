const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Se ao passar o parâmetro "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado', async () => {
    await getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  })

  it('Se ao passar o parâmetro "<ol><li>Item</li></ol>", ele retorna o metodo localStorage.getItem, com dois parâmetros, o primeiro com o valor de "cartItems" e outro com o valor do parâmetro passado para a função', async () => {
    await getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  })
});
