const fetchItem = async (id) => {
  if (id === undefined) {
    throw new Error('You must provide an url');
  }
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await product.json();
  return data;
};


if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
