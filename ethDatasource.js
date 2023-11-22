const { RESTDataSource } = require("apollo-datasource-rest");

// Define a constant for Vitalik Buterin's Ethereum address 
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Create a custom data source class extending Apollo's RESTDataSource
// This will handle querying the Etherscan API
class EtherDataSource extends RESTDataSource {

  // Set the base URL for the Etherscan API 
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Get the Ether balance for the defined address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }
  
  // Get the total supply of Ether
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Additional endpoint to get the latest ETH price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Additional endpoint to get block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;