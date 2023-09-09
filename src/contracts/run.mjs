const { RoundContract } = require("./RoundContract");
const { BetContract } = require("./BetContract");
const fs = require('fs')
const path = require('path')

await $`everdev network default se`

const rd1 = (await $`everdev c d ${path.resolve(__dirname, 'RD.sol')} -d roundCode:${RoundContract.code},betCode:${BetContract.code},side:1 -s tradingBot -v 10000000000`).stdout
const rd1Addr = rd1.match(/(-1|0):[0-9a-f]{64}/)[0]
const rd2 = (await $`everdev c d ${path.resolve(__dirname, 'RD.sol')} -d roundCode:${RoundContract.code},betCode:${BetContract.code},side:2 -s tradingBot -v 10000000000`).stdout
const rd2Addr = rd2.match(/(-1|0):[0-9a-f]{64}/)[0]

console.log(rd1Addr, rd2Addr)
fs.writeFileSync(path.resolve(__dirname, '../config.ts'), `
export const RD1Address='${rd1Addr}'
export const RD2Address='${rd2Addr}'
`);


