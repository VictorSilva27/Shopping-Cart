const fetchItem = async (idItem) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/items/${idItem}`;
    const promiseItem = await fetch(url);
    const response = await promiseItem.json();

    return response;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
