const Web3 = require('web3');
const BigNumber = require('bignumber.js');
const fs = require('fs');

class ethgc 
{
  constructor(currentProvider)
  {
    this.web3 = new Web3(currentProvider);
  }

  // TODO: there has to be a better way... right?
  async init()
  {
    const id = await this.web3.eth.net.getId()
    fs.readFile(
      `../library/abi/${id}.json`,
      'utf8',
      (err, file) => 
      {
        file = JSON.parse(file);
        this.contract = new this.web3.eth.Contract(file.abi, file.address)
      }
    );
  }

  async costToCreateCard()
  {
    return new BigNumber(await this.contract.methods.costToCreateCard().call());
  }
}

module.exports = ethgc;