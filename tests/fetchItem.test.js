require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verifique se é uma função', () => {
    expect.assertions(1);
    const response = fetchItem;
    expect(typeof response).toBe('function');
  });

  it('Verifique se fetchItem com o argumento "MLB1615760527" e teste se fetch foi chamada', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Teste se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    expect.assertions(1);
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Testar se ao passar o parâmetro "MLB1615760527", retorne um objeto esperado', async () => {
    expect.assertions(1);
    const responsa = await fetchItem('MLB1615760527');
    expect(responsa).toBe(item);
  });

  it('Testar se ao passar o parâmetro vázio, retorne um erro', async () => {
    expect.assertions(1);
    const responsa = await fetchItem();
    expect(responsa).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
