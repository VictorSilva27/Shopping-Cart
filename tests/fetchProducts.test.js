require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Verifique se é uma função', () => {
    expect.assertions(1);
    const response = fetchProducts;
    expect(typeof response).toBe('function');
  });

  it('Verifique se fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    expect.assertions(1);
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Testar se ao passar o parâmetro "computador", retorne um objeto esperado', async () => {
    expect.assertions(1);
    const responsa = await fetchProducts('computador');
    expect(responsa).toBe(computadorSearch)  
  });

  it('Testar se ao passar o parâmetro vázio, retorne um erro', async () => {
    expect.assertions(1);
    const responsa = await fetchProducts();
    expect(responsa).toEqual(new Error('You must provide an url'));
  });

});
