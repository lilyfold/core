const SimpleStorage = artifacts.require("SimpleStorage");
const Pool = artifacts.require("Pool");
const StorageProvider = artifacts.require("StorageProviderContract");
module.exports = function (deployer) {
    deployer.deploy(Pool,"0x65E4e8D7bd50191abFee6E5BcDc4d16DDfE9975E","Fold Token","deFIL");

  deployer.deploy(SimpleStorage);
};
