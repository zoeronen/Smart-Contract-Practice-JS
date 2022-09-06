require("@nomiclabs/hardhat-waffle")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.8",
};
