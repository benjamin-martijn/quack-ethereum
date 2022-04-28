import Web3 from "web3";
import DuckStore from "./contracts/DuckStore.json";

const options = {
    web3: {
        block: false,
        customProvider: new Web3("ws://localhost:7545"),
    },
    contracts: [DuckStore],
    events: {
        SimpleStorage: ["StorageSet"],
    },
};

export default options;
