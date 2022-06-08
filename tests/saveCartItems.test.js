const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Se ao passar o parâmetro "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  })

  it('Se ao passar o parâmetro "<ol><li>Item</li></ol>", ele retorna o metodo localStorage.setItem, com dois parâmetros, o primeiro com o valor de "cartItems" e outro com o valor do parâmetro passado para a função', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  })
});
