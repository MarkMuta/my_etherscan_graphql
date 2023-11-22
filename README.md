## How to run Apollo Server

Starting the Apollo GraphQL Server:

1. Open your terminal on VSCode
2. Run the following command to start the server: `node index.js`
3. Upon successful startup, you should see this message: 🚀 Server ready at http://localhost:9000/
4. Access the Apollo Server by navigating to http://localhost:9000 on your browser

## Sample GraphQL Query

Below is a sample GraphQL query to fetch the necessary data from Etherscan
```graphql
query {
  etherBalanceByAddress {
    message
    result
  }
  totalSupplyOfEther {
    message
    result
  }
  latestEthereumPrice {
    message
    result {
      ethbtc
      ethusd
      ethusd_timestamp
    }
  }
  blockConfirmationTime {
    message
    result
  }
}
```