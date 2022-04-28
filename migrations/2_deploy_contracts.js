const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");
const DuckStore = artifacts.require("DuckStore");

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage);
    deployer.deploy(ComplexStorage);
    deployer.deploy(DuckStore);
};
