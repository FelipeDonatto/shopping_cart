const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  beforeEach(async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
  })
  it('chama o localStorage', async () =>{
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('chama o localStorage', async () =>{
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', '<ol><li>Item</li></ol>');
  })
});
