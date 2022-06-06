const getSavedCartItems = () => {
  const cartItems = localStorage.getItem('cart');
  const cart = document.querySelector('.cart__items');
  cart.innerHTML = cartItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
