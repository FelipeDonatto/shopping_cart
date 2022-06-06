const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  beforeEach(async () => {
    await getSavedCartItems();
  })
  it('', async ()=> {
    expect(localStorage.getItem).toHaveBeenCalled();
  })
  it('', async ()=> {
    expect(localStorage.getItem).toHaveBeenCalledWith('cart');
  })
});
