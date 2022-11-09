const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
        goerli: {
            provider: function() {
                return new HDWalletProvider("https://goerli.infura.io/v3/e2504021e9fc43179a0935c1f44f153b")
            },
            network_id: '4',
            gas: 4500000,
            gasPrice: 10000000000,
        }
    }
};