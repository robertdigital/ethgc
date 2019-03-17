const BigNumber = require('bignumber.js');
const ethgcJs = require('../../library/ethgc.js');

contract('test', (accounts) => {
  let ethgc

  before(async () => {
    ethgc = new ethgcJs(web3.currentProvider);
    await ethgc.init();
  })

  it('can check the cost to create a card', async () => {
    const cost = await ethgc.costToCreateCard();
    assert.equal(
      cost.toFixed(), 
      new BigNumber(web3.utils.toWei('0.00005', 'ether')).toFixed()
    )
  })

  // describe.skip('ETH card', () => {
  //   const redeemCode = 'abc123'
  //   const redeemCodeHash = web3.utils.keccak256(redeemCode);
  //   const redeemCodeHashHash = web3.utils.keccak256(redeemCodeHash);
  //   const redeemCodeHashHashHash = web3.utils.keccak256(redeemCodeHashHash);

  //   before(async () => {
  //     await ethgc.createCard(
  //       web3.utils.padLeft(0, 40),
  //       1,
  //       redeemCodeHashHashHash,
  //       {
  //         value: new BigNumber(web3.utils.toWei('0.00005', 'ether')).plus(1).toFixed()
  //       }
  //     )
  //   })

  //   it('Can create ETH card', async () => {
  //   })
  // })
})