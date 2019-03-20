pragma solidity ^0.5.6;

import "../Mixins/MixinNftProxy.sol";


/**
 * Used only for testing.  Do not deploy to prod
 */
contract MockNftProxy is
  MixinNftProxy
{
  function transferNft(
    address tokenAddress,
    uint tokenId,
    address from,
    address to
  ) external
  {
    _transferNft(tokenAddress, tokenId, from, to);
  }

  function isNft(
    address tokenAddress
  ) external view
    returns (bool)
  {
    return _isNft(tokenAddress);
  }
}
