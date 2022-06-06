const saveCartItems = (group) => {
    localStorage.setItem('cart', group);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
