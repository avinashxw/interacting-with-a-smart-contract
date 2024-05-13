Step-by-step guide on interacting with a deployed Ethereum smart contract by updating a smart contract variable.
Reference: 
https://docs.alchemy.com/docs/interacting-with-a-smart-contract
https://docs.alchemy.com/docs/submitting-your-smart-contract-to-etherscan

mkdir hello-world
cd hello-world

npm init # (or npm init --yes)

npm install --save-dev hardhat

npx hardhat

mkdir contracts
mkdir scripts

npm install dotenv --save

npm install ethers@5.7.2

npm install --save-dev @nomiclabs/hardhat-ethers

npx hardhat compile

npx hardhat run scripts/deploy.js --network sepolia

npx hardhat run scripts/interact.js

npx hardhat run scripts/interact.js --network sepolia

npm install --save-dev @nomicfoundation/hardhat-verify

npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS 'Hello World!'


Interacting with smart contract
Submitting your smart contract to Etherscan

Crypto Wallet: Coinbase
Chain: Optimism Sepolia
Blockchain Node: Alchemy
