require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  it('Chama o fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('chama o fetch com o endpoint da API mercado livre', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  it('retorna o objeto esperado', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
});
describe('2 - testa se a função retorna error', ()=> {
    it('retorna um erro ao ser chamada sem parametros', async () => {
    try {
      await fetchItem()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
    });
})