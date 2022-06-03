const fetchProducts = async (key) => {
  if (key === undefined) {
    throw new Error('You must provide an url');
  }
  const product = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${key}`);
  const data = await product.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
