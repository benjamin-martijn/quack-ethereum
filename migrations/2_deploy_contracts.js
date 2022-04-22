const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const DuckStore = artifacts.require("DuckStore");

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage);
    deployer.deploy(TutorialToken);
    deployer.deploy(ComplexStorage);
    deployer.deploy(DuckStore);
};
