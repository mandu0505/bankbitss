require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = process.env.API_KEY;
const PRIVATE_KEY_ACCOUNT = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY_ACCOUNT}`],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY_ACCOUNT}`],
    },
  },
};
