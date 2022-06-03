require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('Chama o fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('chama o fetch com o endpoint da API mercado livre', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('retorna o objeto esperado', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
});
describe('2 - testa se a função retorna error', ()=> {
    it('retorna um erro ao ser chamada sem parametros', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
    });
})
