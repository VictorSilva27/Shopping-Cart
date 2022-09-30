const saveCartItems = (setItem) => {
  // seu código aqui
  const save = localStorage.setItem('cartItems', setItem);
  return save;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
