// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
    deployer.deploy(ERC721PresetMinterPauserAutoId, "CheHall NFT", "CHL", "http://merchdesign.printonline.com.ua/che-hall/test-tokens/");
};