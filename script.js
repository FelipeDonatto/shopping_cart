const products = fetchProducts('computador').then((jsonBody) => jsonBody.results);
const cart = document.querySelector('.cart__items');

function amountToPay() {
  const priceCheck = document.querySelectorAll('.cart__item');
  const priceSpan = document.querySelector('.total-price');
  if (priceCheck.length > 0) {
  let totalPrice = 0;
  priceCheck.forEach((element) => {
    const priceTag = element.innerText.split('PRICE: $');
    const price = parseFloat(priceTag[1], 0);
    totalPrice += price;
    priceSpan.innerHTML = totalPrice;
  });
  } else {
  priceSpan.innerHTML = 0;
  }
}

  const clearBtn = document.querySelector('.empty-cart');
  clearBtn.addEventListener('click', () => {
    cart.innerHTML = '';
    amountToPay();
    saveCartItems('');
  });

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

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const cartItemClickListener = (event) => {
    if (event.target.classList.contains('cart__item')) {
      cart.removeChild(event.target);
      saveCartItems(cart.innerHTML);
      amountToPay();
    }
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const itemDiv = document.querySelector('.items');
const loading = document.createElement('span');
loading.innerText = 'Carregando, por favor aguarde.';
loading.classList.add('loading');
const itemsContainer = document.querySelector('.items');
itemsContainer.appendChild(loading);

products.then((data) => {
  itemsContainer.removeChild(loading);
  data.forEach((element) => {
    const obj = { sku: element.id, name: element.title, image: element.thumbnail };
    itemDiv.appendChild(createProductItemElement(obj));
  });
})
.catch();

itemDiv.addEventListener('click', (event) => {
  const { parentNode } = event.target;
  const id = parentNode.querySelector('.item__sku').innerText;
  fetchItem(id)
  .then((element) => {
    const obj = { sku: element.id, name: element.title, salePrice: element.price };
    if (event.target.classList.contains('item__add')) {
      cart.appendChild(createCartItemElement(obj));
      saveCartItems(cart.innerHTML);
      amountToPay();
    }    
  });
});

window.onload = () => { 
  getSavedCartItems();
  const cartContent = () => document.querySelectorAll('.cart__item')
    .forEach((element) => element.addEventListener('click', cartItemClickListener));
  cartContent();
  amountToPay();
};
