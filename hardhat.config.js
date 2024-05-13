/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

const privateKey = process.env.PRIVATE_KEY;
const apiURL = process.env.API_URL;
const etherscanKey = process.env.ETHERSCAN_KEY;

/* console.log("apiURL: ",apiURL)
console.log("privateKey: ",privateKey) */

module.exports = {
   solidity: "0.8.24",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: apiURL,
         accounts: [privateKey]
      }
   },
   etherscan: {
     apiKey: etherscanKey
   },
   sourcify: {
     // Disabled by default
     // Doesn't need an API key
     enabled: true
   }
}