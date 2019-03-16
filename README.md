# ethgc
ethgc: Ethereum Gift Cards - giveaway ETH or tokens with a redeem code

## Process

1) Create gift card

    Generate a random redeem code and create the card by sending ETH or tokens.

2) Claim card

    Submit a hash of the redeem code, proving that you know it.

3) Redeem gift

    Submit the redeem code and get the ETH or tokens inside.

## FAQ

Why is there a claim step instead of just redeeming directly?

    This is a security precaution.  If you were to submit the redeem code without first claiming the card, an observer could front-run your transaction by copying the code and submitting a transaction with more gas.

How much does it cost?

    This is free and open-source.  There is however the standard gas fee for Ethereum transactions. (TODO: enter gas costs)

    You can support development of tools like this by sending ETH to 0x7a23608a8ebe71868013bda0d900351a83bb4dc2 or by emailing a redeem code to HardlyDiff at gmail.