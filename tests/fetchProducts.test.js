require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('Chama o fetch', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('chama o fetch com o endpoint da API mercado livre', () => {
    fetchProducts('computador');
    expect(fetch()).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('retorna o objeto esperado', () => {
    expect(fetchProducts('computador')).toEqual(computadorSearch);
  })
  it('retorna o objeto esperado', () => {
    expect(()=> {
      fetchProducts();;
    }).toThrow(new Error('You must provide an url'))
  })

});
