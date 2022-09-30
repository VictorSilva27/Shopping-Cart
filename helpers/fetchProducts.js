const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const promiseProd = await fetch(url);
    const response = await promiseProd.json();

    return response;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
