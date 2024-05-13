// interact.js

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const ethers = require('ethers');

// provider - This is a node provider that gives you read and write access to the blockchain
const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL);

// signer - This represents an Ethereum account that has the ability to sign transactions
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract - This is an Ethers.js object representing a specific contract deployed on-chain
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message  = await helloWorldContract.message();
    console.log("The message is: ",message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("this is the new message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: ",newMessage); 
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});