require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name rifle saddle huge hover prison suspect gather'; 
let testAccounts = [
"0x3f0792924f4ebc03c233b23251dee56bb56b9c568187767c773cf79823f0f164",
"0x5d519c196574995333b82f741c21ff8c85c3ebce22e510f82b68427a95d7f91a",
"0x772889052fbf314c2792b7b9f6d0d8b2a8a6592952b709c4e9f8b85fc57fa5d3",
"0x56008b98c4c35c75310539fbc3f846e4cf4130c738af4438d73a233d98b69f49",
"0xc49a35045e75e01d43248e1a61f95358aa828722f54bed1826933bf46248fd41",
"0x159811b6e01622a7a82fc7c07ce3e22f77dd3f51995dd0e1c993e6326ff03346",
"0x1c2c4cc16304fe704d5a82f270695de605835f66df1a5a0caec2c146c343f20c",
"0xc80b3c2ada0c80fe24e40c49ae2beda5ec42fc7b04334d703e7d7cf2dcbe20fd",
"0x309aba0f606a6ecc3d46d1ed29655e08ad7fb8e095febca6a0bd8735036b1a9e",
"0xf5e458e52516e918ff9244d291475b2c96dbaa35fd4afa527ce473d38fc7bc41"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

