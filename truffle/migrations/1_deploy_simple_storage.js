// const SimpleStorage = artifacts.require("SimpleStorage");
const Pool = artifacts.require("Pool");
const StorageProvider = artifacts.require("StorageProviderContract");
module.exports = function (deployer) {
  // deployer.deploy(StorageProvider);
  deployer.deploy(Pool,"0xaC26a4Ab9cF2A8c5DBaB6fb4351ec0F4b07356c4","Fold Token","dFIL");

  // deployer.deploy(SimpleStorage);
};
