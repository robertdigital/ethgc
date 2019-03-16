const ETHGC = artifacts.require("ethgc");

module.exports = function(deployer) {
  deployer.deploy(ETHGC);
};
