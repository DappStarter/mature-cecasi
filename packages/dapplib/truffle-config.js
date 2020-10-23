require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan random night history inflict end army giant'; 
let testAccounts = [
"0x2daf694b9c923620e7a9e990744506032c07ef88ca11da8c11f478ecf8ddfb34",
"0xb1d83ab840354056de1a6bcf9cf52f13c9d854b11096869a48160aa369eb3ae5",
"0xc9790392b46ed9efccb27f3e2182ca62811692eebc16b51fa51a9f2fab99204b",
"0x739134286391a65a971e8c295b1f4f89df72f20aca8ee4264a09b3d2453c6ffa",
"0x7f263245da7f543e822629911859fc726e38b014601d1bfaf527cf2270dbc1e8",
"0x0c44b3a14d912fc7fc52503b6c891b4877a51f97fc76ca722dd54dd50d649121",
"0xe933da72b273b841fe8cf3a81c77983a2f2d104c0353be35e719a4168cf93aa4",
"0x98ece836d2c0c0dc6df48fd1bd1bbad9b1f7907255e28ea9eaac9b7de5f07e1b",
"0xe400fd61e4de40da5f0acd21d13105300de3dc797ef2c5a05d54628891c1f1fb",
"0xa95f75539eca3fef3c40bfdbcedd737728e786a4ac10672b230fff1a042f9ea7"
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
            version: '^0.5.11'
        }
    }
};
