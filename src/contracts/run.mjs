const fs = require('fs')
const path = require('path')



const dir = '.'
await $`everdev network default se`
await $`everdev se reset`
await $`everdev c topup -a 0:70da6d4b6b3ab29f418aabffa3a630de48de9e9f2659030329dee11ea656b77f -v 1e12`
await $`everdev sol compile ${dir}/Bet.sol`
await $`everdev sol compile ${dir}/Round.sol`
await $`everdev sol compile ${dir}/RD.sol`

await $`everdev js wrap ${dir}/Bet.sol`
await $`everdev js wrap ${dir}/Round.sol`
await $`everdev js wrap ${dir}/RD.sol`

await $`everdev js wrap ${dir}/Bet.sol -e es6-default -o BetContract.ts`
await $`everdev js wrap ${dir}/Round.sol -e es6-default -o RoundContract.ts`
await $`everdev js wrap ${dir}/RD.sol -e es6-default -o RDContract.ts`

const { RoundContract } = require("./RoundContract");
const { BetContract } = require("./BetContract");
const rd1 = (await $`everdev c d RD.sol -d roundCode:${RoundContract.code},betCode:${BetContract.code},side:1 -s tradingBot -v 1e8`).stdout
const rd1Addr = rd1.match(/(-1|0):[0-9a-f]{64}/)[0]
const rd2 = (await $`everdev c d RD.sol -d roundCode:${RoundContract.code},betCode:${BetContract.code},side:2 -s tradingBot -v 1e8`).stdout
const rd2Addr = rd2.match(/(-1|0):[0-9a-f]{64}/)[0]


//pool
await $`everdev sol compile ${dir}/Claim.sol`
await $`everdev sol compile ${dir}/Whale.sol`
await $`everdev sol compile ${dir}/WhalePool.sol`

await $`everdev js wrap ${dir}/Claim.sol`
await $`everdev js wrap ${dir}/Whale.sol`
await $`everdev js wrap ${dir}/WhalePool.sol`

await $`everdev js wrap ${dir}/Claim.sol -e es6-default -o ClaimContract.ts`
await $`everdev js wrap ${dir}/Whale.sol -e es6-default -o WhaleContract.ts`
await $`everdev js wrap ${dir}/WhalePool.sol -e es6-default -o WhalePoolContract.ts`

const { WhaleContract } = require("./WhaleContract");

const whalePool = (await $`everdev c d WhalePool.sol -d whaleCode:${WhaleContract.code} -s tradingBot -v 1e8`).stdout
const whalePoolAddr = whalePool.match(/(-1|0):[0-9a-f]{64}/)[0]
const claim = (await $`everdev c d Claim.sol -d whaleCode:${WhaleContract.code} -s tradingBot -v 1e8`).stdout
const claimAddr = claim.match(/(-1|0):[0-9a-f]{64}/)[0]

fs.writeFileSync(path.resolve(__dirname, '../config.ts'), `
export const RD1Address='${rd1Addr}'
export const RD2Address='${rd2Addr}'
export const poolAddress = '${whalePoolAddr}'
export const claimPoolAddress = '${claimAddr}'
export const roundDuration=60*6
`);

function cleanUp() {
    $`mv -f *.abi.json ./artifacts`
    $`mv -f *.tvc ./artifacts`
    $`mv -f *.js ./artifacts`
}

cleanUp();
