require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Ay6mNb0cij0R4Qj2e6LIWVfnk5X3odqG',
      accounts: ['306468fd6343d55f36768a6daf335cad7a8ebbdff4472ad419e007bbcffe7647'],
    },
  },
};