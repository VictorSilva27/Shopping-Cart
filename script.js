const itemList = document.querySelector('.cart__items');
const buttonClear = document.querySelector('.empty-cart');
const divLoading = document.querySelector('.loading');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
const createCartItemElement = ({ name, salePrice, image }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `<div class='title__cart'>${name}</div>
  <div class='price__cart'>R$ ${salePrice.toFixed(2)}</div>`;
  li.appendChild(createProductImageElement(image));
  return li;
};
// Para poder pegar os preços dos produtos e somar
const getPrice = () => {
  const elementLi = document.querySelectorAll('.cart__item');
  const elementPrice = document.querySelector('.total-price');
  let count = 0;
  elementLi.forEach((element) => {
    const string = element.innerText.split('$')[1];
    count += (+string);
  });
  elementPrice.innerHTML = count.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
// Função para adicionar o Item para carrinho
const addItem = async (idItem) => {
  const item = await fetchItem(idItem);
  // Pegar o elemento pai dos cart__item
  const dadItens = document.querySelector('.cart__items');
  const { id, title, price, thumbnail } = item;
  await dadItens.appendChild(createCartItemElement({
    sku: id,
    name: title,
    salePrice: price,
    image: thumbnail,
  }));
  getPrice();
  saveCartItems(itemList.innerHTML);
};
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
// pegar id dos items e mandar para a criação do Botão
const getIdFromButton = (event) => {
  const idItem = getSkuFromProductItem(event.parentNode);
  addItem(idItem);
};
const createProductItemElement = ({ sku, name, salePrice, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', salePrice));
  const buttonCreate = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttonCreate.addEventListener('click', (event) => {
    getIdFromButton(event.target);
  });
  section.appendChild(buttonCreate);

  return section;
};
// Chamando o fetch e add os produtos da API
const elementsProduct = async () => {
  const product = await fetchProducts('computador');
  divLoading.remove();
  const dadItens = document.querySelector('.items');
  product.results.forEach(({ id, title, price, thumbnail }) => {
    const idProduct = createProductItemElement({
      sku: id,
      name: title,
      salePrice: price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      image: thumbnail,
    });
    dadItens.appendChild(idProduct);
  });
};
// Chamar a função para que os produtos apareça no index.html
elementsProduct();
const cartItemClickListener = (event) => {
  // Essa função só funciona, caso a class do cart__item for clicado 
  if (event.target.classList.contains('cart__item')) {
    event.target.remove();
    getPrice();
    saveCartItems(itemList.innerHTML);
  }
};
itemList.addEventListener('click', cartItemClickListener);

buttonClear.addEventListener('click', () => {
  itemList.innerHTML = '';
  getPrice();
});

window.onload = () => {
  itemList.innerHTML = getSavedCartItems();
  getPrice();
};
