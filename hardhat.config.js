const { Toast } = require("reactstrap");

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");




task("accounts", "Prints the list of accounts", async (taskArgs,hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
     console.log(account.address);
  }
});

const PRIVATE_KEY = "";
const MUMBAI_NETWORK_URL = "https://rpc-mainnet.matic.quiknode.pro";
const POLYGONSCAN_API_KEY = "";

/** 
 *@type import('hardhat/config').HardhatUserConfig 
 */
 module.exports = {
  solidity: "0.8.15",
  networks: {
    mumbai: {
      url: MUMBAI_NETWORK_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY 
  }
};
